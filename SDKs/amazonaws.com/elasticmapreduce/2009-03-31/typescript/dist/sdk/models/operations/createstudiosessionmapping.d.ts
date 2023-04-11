import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateStudioSessionMappingXAmzTargetEnum {
    ElasticMapReduceCreateStudioSessionMapping = "ElasticMapReduce.CreateStudioSessionMapping"
}
export declare class CreateStudioSessionMappingRequest extends SpeakeasyBase {
    createStudioSessionMappingInput: shared.CreateStudioSessionMappingInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateStudioSessionMappingXAmzTargetEnum;
}
export declare class CreateStudioSessionMappingResponse extends SpeakeasyBase {
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
