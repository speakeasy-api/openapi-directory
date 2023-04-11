import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Unify event source
 */
export declare enum ConnectorEventEventSourceEnum {
    Native = "native",
    Virtual = "virtual"
}
/**
 * Unify event that is supported on the connector. Events are delivered via Webhooks.
 */
export declare class ConnectorEvent extends SpeakeasyBase {
    /**
     * Downstream event type
     */
    downstreamEventType?: string;
    /**
     * Unify entity type
     */
    entityType?: string;
    /**
     * Unify event source
     */
    eventSource?: ConnectorEventEventSourceEnum;
    /**
     * Unify event type
     */
    eventType?: string;
    resources?: string[];
}
