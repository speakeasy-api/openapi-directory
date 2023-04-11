import { SpeakeasyBase } from "../../../internal/utils";
import { Ticket } from "./ticket";
/**
 * Get a Ticket
 */
export declare class GetTicketResponse extends SpeakeasyBase {
    data: Ticket;
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
