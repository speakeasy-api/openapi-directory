import { SpeakeasyBase } from "../../../internal/utils";
import { MarketChange } from "./marketchange";
/**
 * Change Type - set to indicate the type of change - if null this is a delta)
 */
export declare enum MarketChangeMessageCtEnum {
    SubImage = "SUB_IMAGE",
    ResubDelta = "RESUB_DELTA",
    Heartbeat = "HEARTBEAT"
}
/**
 * Segment Type - if the change is split into multiple segments, this denotes the beginning and end of a change, and segments in between. Will be null if data is not segmented
 */
export declare enum MarketChangeMessageSegmentTypeEnum {
    SegStart = "SEG_START",
    Seg = "SEG",
    SegEnd = "SEG_END"
}
export declare class MarketChangeMessage extends SpeakeasyBase {
    /**
     * Token value (non-null) should be stored and passed in a MarketSubscriptionMessage to resume subscription (in case of disconnect)
     */
    clk?: string;
    /**
     * Conflate Milliseconds - the conflation rate (may differ from that requested if subscription is delayed)
     */
    conflateMs?: number;
    /**
     * Change Type - set to indicate the type of change - if null this is a delta)
     */
    ct?: MarketChangeMessageCtEnum;
    /**
     * Heartbeat Milliseconds - the heartbeat rate (may differ from requested: bounds are 500 to 30000)
     */
    heartbeatMs?: number;
    /**
     * Client generated unique id to link request with response (like json rpc)
     */
    id?: number;
    /**
     * Token value (non-null) should be stored and passed in a MarketSubscriptionMessage to resume subscription (in case of disconnect)
     */
    initialClk?: string;
    /**
     * MarketChanges - the modifications to markets (will be null on a heartbeat
     */
    mc?: MarketChange[];
    /**
     * The operation type
     */
    op?: string;
    /**
     * Publish Time (in millis since epoch) that the changes were generated
     */
    pt?: number;
    /**
     * Segment Type - if the change is split into multiple segments, this denotes the beginning and end of a change, and segments in between. Will be null if data is not segmented
     */
    segmentType?: MarketChangeMessageSegmentTypeEnum;
    /**
     * Stream status: set to null if the exchange stream data is up to date and 503 if the downstream services are experiencing latencies
     */
    status?: number;
}
