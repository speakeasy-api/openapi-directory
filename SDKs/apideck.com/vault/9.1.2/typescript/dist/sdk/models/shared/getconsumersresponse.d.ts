import { SpeakeasyBase } from "../../../internal/utils";
import { ConsumerMetadata } from "./consumermetadata";
import { Links } from "./links";
import { Meta } from "./meta";
import { RequestCountAllocation } from "./requestcountallocation";
export declare class GetConsumersResponseData extends SpeakeasyBase {
    aggregatedRequestCount?: number;
    applicationId?: string;
    consumerId?: string;
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
/**
 * Consumers
 */
export declare class GetConsumersResponse extends SpeakeasyBase {
    data: GetConsumersResponseData[];
    /**
     * Links to navigate to previous or next pages through the API
     */
    links?: Links;
    /**
     * Response metadata
     */
    meta?: Meta;
    /**
     * HTTP Response Status
     */
    status: string;
    /**
     * HTTP Response Status Code
     */
    statusCode: number;
}
