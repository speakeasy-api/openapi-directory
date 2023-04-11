import { SpeakeasyBase } from "../../../internal/utils";
import { ConsumptionConfiguration } from "./consumptionconfiguration";
import { DatetimeRange } from "./datetimerange";
import { Entitlement } from "./entitlement";
import { Issuer } from "./issuer";
import { Metadata } from "./metadata";
export declare class CreateLicenseRequest extends SpeakeasyBase {
    beneficiary: string;
    clientToken: string;
    consumptionConfiguration: ConsumptionConfiguration;
    entitlements: Entitlement[];
    homeRegion: string;
    issuer: Issuer;
    licenseMetadata?: Metadata[];
    licenseName: string;
    productName: string;
    productSKU: string;
    validity: DatetimeRange;
}
