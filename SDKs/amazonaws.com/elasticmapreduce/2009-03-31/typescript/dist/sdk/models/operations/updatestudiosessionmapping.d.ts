import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateStudioSessionMappingXAmzTargetEnum {
    ElasticMapReduceUpdateStudioSessionMapping = "ElasticMapReduce.UpdateStudioSessionMapping"
}
export declare class UpdateStudioSessionMappingRequest extends SpeakeasyBase {
    updateStudioSessionMappingInput: shared.UpdateStudioSessionMappingInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateStudioSessionMappingXAmzTargetEnum;
}
export declare class UpdateStudioSessionMappingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
