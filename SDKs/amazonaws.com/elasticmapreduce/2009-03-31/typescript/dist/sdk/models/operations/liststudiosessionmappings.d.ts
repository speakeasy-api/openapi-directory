import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListStudioSessionMappingsXAmzTargetEnum {
    ElasticMapReduceListStudioSessionMappings = "ElasticMapReduce.ListStudioSessionMappings"
}
export declare class ListStudioSessionMappingsRequest extends SpeakeasyBase {
    listStudioSessionMappingsInput: shared.ListStudioSessionMappingsInput;
    /**
     * Pagination token
     */
    marker?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListStudioSessionMappingsXAmzTargetEnum;
}
export declare class ListStudioSessionMappingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listStudioSessionMappingsOutput?: shared.ListStudioSessionMappingsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
