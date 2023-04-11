import { SpeakeasyBase } from "../../../internal/utils";
import { ConsumptionConfiguration } from "./consumptionconfiguration";
import { DatetimeRange } from "./datetimerange";
import { Entitlement } from "./entitlement";
import { IssuerDetails } from "./issuerdetails";
import { LicenseStatusEnum } from "./licensestatusenum";
import { Metadata } from "./metadata";
import { ReceivedMetadata } from "./receivedmetadata";
/**
 * Describes a license that is granted to a grantee.
 */
export declare class GrantedLicense extends SpeakeasyBase {
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
    receivedMetadata?: ReceivedMetadata;
    status?: LicenseStatusEnum;
    validity?: DatetimeRange;
    version?: string;
}
