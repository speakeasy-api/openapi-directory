import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteStudioSessionMappingXAmzTargetEnum {
    ElasticMapReduceDeleteStudioSessionMapping = "ElasticMapReduce.DeleteStudioSessionMapping"
}
export declare class DeleteStudioSessionMappingRequest extends SpeakeasyBase {
    deleteStudioSessionMappingInput: shared.DeleteStudioSessionMappingInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteStudioSessionMappingXAmzTargetEnum;
}
export declare class DeleteStudioSessionMappingResponse extends SpeakeasyBase {
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
