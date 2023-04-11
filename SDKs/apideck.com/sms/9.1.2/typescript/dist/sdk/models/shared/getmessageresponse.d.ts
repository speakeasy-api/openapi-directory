import { SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";
/**
 * Messages
 */
export declare class GetMessageResponse extends SpeakeasyBase {
    data: Message;
    /**
     * Operation performed
     */
    operation: string;
    /**
     * Unified API resource name
     */
    resource: string;
    /**
     * Apideck ID of service provider
     */
    service: string;
    /**
     * HTTP Response Status
     */
    status: string;
    /**
     * HTTP Response Status Code
     */
    statusCode: number;
}
