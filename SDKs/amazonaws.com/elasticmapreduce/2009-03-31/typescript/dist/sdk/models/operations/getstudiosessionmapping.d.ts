import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetStudioSessionMappingXAmzTargetEnum {
    ElasticMapReduceGetStudioSessionMapping = "ElasticMapReduce.GetStudioSessionMapping"
}
export declare class GetStudioSessionMappingRequest extends SpeakeasyBase {
    getStudioSessionMappingInput: shared.GetStudioSessionMappingInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetStudioSessionMappingXAmzTargetEnum;
}
export declare class GetStudioSessionMappingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getStudioSessionMappingOutput?: shared.GetStudioSessionMappingOutput;
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
