import { SpeakeasyBase } from "../../../internal/utils";
import { OrderFilter } from "./orderfilter";
export declare class OrderSubscriptionMessage extends SpeakeasyBase {
    /**
     * Token value delta (received in MarketChangeMessage) that should be passed to resume a subscription
     */
    clk?: string;
    /**
     * Conflate Milliseconds - the conflation rate (looped back on initial image after validation: bounds are 0 to 120000)
     */
    conflateMs?: number;
    /**
     * Heartbeat Milliseconds - the heartbeat rate (looped back on initial image after validation: bounds are 500 to 5000)
     */
    heartbeatMs?: number;
    /**
     * Client generated unique id to link request with response (like json rpc)
     */
    id?: number;
    /**
     * Token value (received in initial MarketChangeMessage) that should be passed to resume a subscription
     */
    initialClk?: string;
    /**
     * The operation type
     */
    op?: string;
    orderFilter?: OrderFilter;
    /**
     * Segmentation Enabled - allow the server to send large sets of data in segments, instead of a single block
     */
    segmentationEnabled?: boolean;
}
