import { SpeakeasyBase } from "../../../internal/utils";
import { ConsumptionConfiguration } from "./consumptionconfiguration";
import { DatetimeRange } from "./datetimerange";
import { Entitlement } from "./entitlement";
import { Issuer } from "./issuer";
import { LicenseStatusEnum } from "./licensestatusenum";
import { Metadata } from "./metadata";
export declare class CreateLicenseVersionRequest extends SpeakeasyBase {
    clientToken: string;
    consumptionConfiguration: ConsumptionConfiguration;
    entitlements: Entitlement[];
    homeRegion: string;
    issuer: Issuer;
    licenseArn: string;
    licenseMetadata?: Metadata[];
    licenseName: string;
    productName: string;
    sourceVersion?: string;
    status: LicenseStatusEnum;
    validity: DatetimeRange;
}
