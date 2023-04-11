import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains statistics of billing plan usage
 */
export declare class CreditUsage extends SpeakeasyBase {
    /**
     * Sum of calls duration rounded to nearest whole minute
     */
    callsDurationMinutes?: number;
    /**
     * Total credits used calls and texts.
     */
    creditsUsed?: number;
    /**
     * Start of usage period formatted in unix time milliseconds. Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
     */
    intervalBegin?: number;
    /**
     * End of usage period formatted in unix time milliseconds. Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
     */
    intervalEnd?: number;
    /**
     * Number of texts sent
     */
    textsSent?: number;
}
