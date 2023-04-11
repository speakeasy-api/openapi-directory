import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListLanguagesXAmzTargetEnum {
    AWSShineFrontendService20170701ListLanguages = "AWSShineFrontendService_20170701.ListLanguages"
}
export declare class ListLanguagesRequest extends SpeakeasyBase {
    listLanguagesRequest: shared.ListLanguagesRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListLanguagesXAmzTargetEnum;
}
export declare class ListLanguagesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * Success
     */
    listLanguagesResponse?: shared.ListLanguagesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * UnsupportedDisplayLanguageCodeException
     */
    unsupportedDisplayLanguageCodeException?: any;
}
