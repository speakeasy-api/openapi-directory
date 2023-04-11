import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of target platform.
 */
export declare enum ListEngineVersionsEngineTypeEnum {
    Microfocus = "microfocus",
    Bluage = "bluage"
}
export declare class ListEngineVersionsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The type of target platform.
     */
    engineType?: ListEngineVersionsEngineTypeEnum;
    /**
     * The maximum number of objects to return.
     */
    maxResults?: number;
    /**
     * A pagination token returned from a previous call to this operation. This specifies the next item to return. To return to the beginning of the list, exclude this parameter.
     */
    nextToken?: string;
}
export declare class ListEngineVersionsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listEngineVersionsResponse?: shared.ListEngineVersionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
