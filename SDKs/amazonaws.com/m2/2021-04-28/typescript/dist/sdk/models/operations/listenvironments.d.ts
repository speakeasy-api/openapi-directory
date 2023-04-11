import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The engine type for the runtime environment.
 */
export declare enum ListEnvironmentsEngineTypeEnum {
    Microfocus = "microfocus",
    Bluage = "bluage"
}
export declare class ListEnvironmentsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The engine type for the runtime environment.
     */
    engineType?: ListEnvironmentsEngineTypeEnum;
    /**
     * The maximum number of runtime environments to return.
     */
    maxResults?: number;
    /**
     * The names of the runtime environments. Must be unique within the account.
     */
    names?: string[];
    /**
     * A pagination token to control the number of runtime environments displayed in the list.
     */
    nextToken?: string;
}
export declare class ListEnvironmentsResponse extends SpeakeasyBase {
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
    listEnvironmentsResponse?: shared.ListEnvironmentsResponse;
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
