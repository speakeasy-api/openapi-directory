import { SpeakeasyBase } from "../../../internal/utils";
import { OfferingStatus } from "./offeringstatus";
/**
 * Returns the status result for a device offering.
**/
export declare class GetOfferingStatusResult extends SpeakeasyBase {
    current?: Record<string, OfferingStatus>;
    nextPeriod?: Record<string, OfferingStatus>;
    nextToken?: string;
}
