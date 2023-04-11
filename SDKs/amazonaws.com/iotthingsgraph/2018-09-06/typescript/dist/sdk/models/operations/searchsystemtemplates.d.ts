import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SearchSystemTemplatesXAmzTargetEnum {
    IotThingsGraphFrontEndServiceSearchSystemTemplates = "IotThingsGraphFrontEndService.SearchSystemTemplates"
}
export declare class SearchSystemTemplatesRequest extends SpeakeasyBase {
    searchSystemTemplatesRequest: shared.SearchSystemTemplatesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SearchSystemTemplatesXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class SearchSystemTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    searchSystemTemplatesResponse?: shared.SearchSystemTemplatesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
