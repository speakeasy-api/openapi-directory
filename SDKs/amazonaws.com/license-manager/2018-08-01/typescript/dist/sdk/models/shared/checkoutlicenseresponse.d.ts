import { SpeakeasyBase } from "../../../internal/utils";
import { CheckoutTypeEnum } from "./checkouttypeenum";
import { EntitlementData } from "./entitlementdata";
/**
 * Success
 */
export declare class CheckoutLicenseResponse extends SpeakeasyBase {
    checkoutType?: CheckoutTypeEnum;
    entitlementsAllowed?: EntitlementData[];
    expiration?: string;
    issuedAt?: string;
    licenseArn?: string;
    licenseConsumptionToken?: string;
    nodeId?: string;
    signedToken?: string;
}
