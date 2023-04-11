import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A dial request for a campaign.
 */
export declare class DialRequest extends SpeakeasyBase {
    /**
     * A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in contact flows just like any other contact attributes.
     */
    attributes: Record<string, string>;
    /**
     * Client provided parameter used for idempotency. Its value must be unique for each request.
     */
    clientToken: string;
    /**
     * Timestamp with no UTC offset or timezone
     */
    expirationTime: Date;
    /**
     * The phone number of the customer, in E.164 format.
     */
    phoneNumber: string;
}
