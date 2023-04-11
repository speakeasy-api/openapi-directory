import { SpeakeasyBase } from "../../../internal/utils";
import { Fleet } from "./fleet";
/**
 * Success
 */
export declare class DescribeFleetsResult extends SpeakeasyBase {
    fleets?: Fleet[];
    nextToken?: string;
}
