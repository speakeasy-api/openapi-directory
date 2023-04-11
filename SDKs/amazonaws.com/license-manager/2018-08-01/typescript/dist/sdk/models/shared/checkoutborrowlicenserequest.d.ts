import { SpeakeasyBase } from "../../../internal/utils";
import { DigitalSignatureMethodEnum } from "./digitalsignaturemethodenum";
import { EntitlementData } from "./entitlementdata";
import { Metadata } from "./metadata";
export declare class CheckoutBorrowLicenseRequest extends SpeakeasyBase {
    checkoutMetadata?: Metadata[];
    clientToken: string;
    digitalSignatureMethod: DigitalSignatureMethodEnum;
    entitlements: EntitlementData[];
    licenseArn: string;
    nodeId?: string;
}
