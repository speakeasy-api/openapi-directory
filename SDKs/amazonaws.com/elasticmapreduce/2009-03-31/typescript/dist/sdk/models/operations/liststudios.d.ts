import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListStudiosXAmzTargetEnum {
    ElasticMapReduceListStudios = "ElasticMapReduce.ListStudios"
}
export declare class ListStudiosRequest extends SpeakeasyBase {
    listStudiosInput: shared.ListStudiosInput;
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
    xAmzTarget: ListStudiosXAmzTargetEnum;
}
export declare class ListStudiosResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listStudiosOutput?: shared.ListStudiosOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
