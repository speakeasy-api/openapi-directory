import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes Market days supply results for year make model trim combination
 */
export declare class Mds extends SpeakeasyBase {
    /**
     * Make of vin provided
     */
    make?: string;
    /**
     * Provides Market days supply count
     */
    mds?: number;
    /**
     * Model of vin provided
     */
    model?: string;
    /**
     * Sold vins array
     */
    soldVins?: string[];
    /**
     * Active cars for ymmt combination
     */
    totalActiveCarsForYmmt?: number;
    /**
     * Cars sold in last 45 days
     */
    totalCarsSoldInLast45Days?: number;
    /**
     * Trim of vin provided
     */
    trim?: string;
    /**
     * Year of vin provided
     */
    year?: number;
}
