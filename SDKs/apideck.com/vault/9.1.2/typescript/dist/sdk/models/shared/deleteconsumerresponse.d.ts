import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteConsumerResponseData extends SpeakeasyBase {
    /**
     * Unique consumer identifier. You can freely choose a consumer ID yourself. Most of the time, this is an ID of your internal data model that represents a user or account in your system (for example account:12345). If the consumer doesn't exist yet, Vault will upsert a consumer based on your ID.
     */
    consumerId?: string;
}
/**
 * Consumer deleted
 */
export declare class DeleteConsumerResponse extends SpeakeasyBase {
    data: DeleteConsumerResponseData;
    /**
     * HTTP Response Status
     */
    status: string;
    /**
     * HTTP Response Status Code
     */
    statusCode: number;
}
