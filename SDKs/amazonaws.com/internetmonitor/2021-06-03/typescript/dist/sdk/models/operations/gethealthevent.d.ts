import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetHealthEventRequest extends SpeakeasyBase {
    /**
     * The internally generated identifier of a health event. Because <code>EventID</code> contains the forward slash (“/”) character, you must URL-encode the <code>EventID</code> field in the request URL.
     */
    eventId: string;
    /**
     * The name of the monitor.
     */
    monitorName: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetHealthEventResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getHealthEventOutput?: shared.GetHealthEventOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
