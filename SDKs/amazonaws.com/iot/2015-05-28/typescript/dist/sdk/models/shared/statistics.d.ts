import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A map of key-value pairs for all supported statistics. For issues with missing or unexpected values for this API, consult <a href="https://docs.aws.amazon.com/iot/latest/developerguide/fleet-indexing-troubleshooting.html"> Fleet indexing troubleshooting guide</a>.
 */
export declare class Statistics extends SpeakeasyBase {
    average?: number;
    count?: number;
    maximum?: number;
    minimum?: number;
    stdDeviation?: number;
    sum?: number;
    sumOfSquares?: number;
    variance?: number;
}
