import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutEventsRequestBody extends SpeakeasyBase {
    /**
     * An array of Event JSON objects
     */
    events: shared.Event[];
}
export declare class PutEventsRequest extends SpeakeasyBase {
    requestBody: PutEventsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The client context including the client ID, app title, app version and package name.
     */
    xAmzClientContext: string;
    /**
     * The encoding used for the client context.
     */
    xAmzClientContextEncoding?: string;
}
export declare class PutEventsResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: shared.BadRequestException;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
