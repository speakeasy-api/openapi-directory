import { SpeakeasyBase } from "../../../internal/utils";
import { Contact } from "./contact";
/**
 * Contact
 */
export declare class GetContactResponse extends SpeakeasyBase {
    data: Contact;
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
