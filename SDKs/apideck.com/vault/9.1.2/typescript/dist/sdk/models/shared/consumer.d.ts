import { SpeakeasyBase } from "../../../internal/utils";
import { ConsumerConnection } from "./consumerconnection";
import { ConsumerMetadata } from "./consumermetadata";
import { RequestCountAllocation } from "./requestcountallocation";
export declare class Consumer extends SpeakeasyBase {
    aggregatedRequestCount?: number;
    /**
     * ID of your Apideck Application
     */
    applicationId?: string;
    connections?: ConsumerConnection[];
    /**
     * Unique consumer identifier. You can freely choose a consumer ID yourself. Most of the time, this is an ID of your internal data model that represents a user or account in your system (for example account:12345). If the consumer doesn't exist yet, Vault will upsert a consumer based on your ID.
     */
    consumerId: string;
    created?: string;
    /**
     * The metadata of the consumer. This is used to display the consumer in the sidebar. This is optional, but recommended.
     */
    metadata?: ConsumerMetadata;
    modified?: string;
    requestCountUpdated?: string;
    requestCounts?: RequestCountAllocation;
    services?: string[];
}
export declare class ConsumerInput extends SpeakeasyBase {
    /**
     * Unique consumer identifier. You can freely choose a consumer ID yourself. Most of the time, this is an ID of your internal data model that represents a user or account in your system (for example account:12345). If the consumer doesn't exist yet, Vault will upsert a consumer based on your ID.
     */
    consumerId: string;
    /**
     * The metadata of the consumer. This is used to display the consumer in the sidebar. This is optional, but recommended.
     */
    metadata?: ConsumerMetadata;
}
