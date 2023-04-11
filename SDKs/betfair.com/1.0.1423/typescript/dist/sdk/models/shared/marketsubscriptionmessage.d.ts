import { SpeakeasyBase } from "../../../internal/utils";
import { MarketDataFilter } from "./marketdatafilter";
import { MarketFilter } from "./marketfilter";
export declare class MarketSubscriptionMessage extends SpeakeasyBase {
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
    marketDataFilter?: MarketDataFilter;
    marketFilter?: MarketFilter;
    /**
     * The operation type
     */
    op?: string;
    /**
     * Segmentation Enabled - allow the server to send large sets of data in segments, instead of a single block
     */
    segmentationEnabled?: boolean;
}
