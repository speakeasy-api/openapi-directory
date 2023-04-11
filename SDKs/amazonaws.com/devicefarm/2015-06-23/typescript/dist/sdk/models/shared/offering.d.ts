import { SpeakeasyBase } from "../../../internal/utils";
import { DevicePlatformEnum } from "./deviceplatformenum";
import { OfferingTypeEnum } from "./offeringtypeenum";
import { RecurringCharge } from "./recurringcharge";
/**
 * Represents the metadata of a device offering.
 */
export declare class Offering extends SpeakeasyBase {
    description?: string;
    id?: string;
    platform?: DevicePlatformEnum;
    recurringCharges?: RecurringCharge[];
    type?: OfferingTypeEnum;
}
