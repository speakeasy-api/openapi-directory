import { SpeakeasyBase } from "../../../internal/utils";
export declare class ZoneStatistics extends SpeakeasyBase {
    /**
     * Report Date
     */
    date: Date;
    /**
     * Increase
     */
    dec: number;
    /**
     * Decrease
     */
    inc: number;
    /**
     * Total number of records
     */
    total: number;
    /**
     * TLD name
     */
    zone: string;
}
