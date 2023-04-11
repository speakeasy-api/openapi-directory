import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Range information
 */
export declare class Range extends SpeakeasyBase {
    /**
     * Range limit. Maximum 500.
     */
    limit: number;
    /**
     * Range offset
     */
    offset: number;
    /**
     * Total items available
     */
    total: number;
}
