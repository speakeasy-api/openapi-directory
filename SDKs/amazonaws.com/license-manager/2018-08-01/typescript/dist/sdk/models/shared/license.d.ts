import { SpeakeasyBase } from "../../../internal/utils";
import { ConsumptionConfiguration } from "./consumptionconfiguration";
import { DatetimeRange } from "./datetimerange";
import { Entitlement } from "./entitlement";
import { IssuerDetails } from "./issuerdetails";
import { LicenseStatusEnum } from "./licensestatusenum";
import { Metadata } from "./metadata";
/**
 * Software license that is managed in License Manager.
 */
export declare class License extends SpeakeasyBase {
    beneficiary?: string;
    consumptionConfiguration?: ConsumptionConfiguration;
    createTime?: string;
    entitlements?: Entitlement[];
    homeRegion?: string;
    issuer?: IssuerDetails;
    licenseArn?: string;
    licenseMetadata?: Metadata[];
    licenseName?: string;
    productName?: string;
    productSKU?: string;
    status?: LicenseStatusEnum;
    validity?: DatetimeRange;
    version?: string;
}
