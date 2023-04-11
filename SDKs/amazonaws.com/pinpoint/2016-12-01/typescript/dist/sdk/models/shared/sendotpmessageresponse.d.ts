import { SpeakeasyBase } from "../../../internal/utils";
import { MessageResponse } from "./messageresponse";
/**
 * Success
 */
export declare class SendOTPMessageResponse extends SpeakeasyBase {
    /**
     * Provides information about the results of a request to send a message to an endpoint address.
     */
    messageResponse: MessageResponse;
}
