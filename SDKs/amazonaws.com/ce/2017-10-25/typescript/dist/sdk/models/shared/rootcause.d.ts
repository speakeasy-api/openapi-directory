import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The combination of Amazon Web Service, linked account, linked account name, Region, and usage type where a cost anomaly is observed. The linked account name will only be available when the account name can be identified.
 */
export declare class RootCause extends SpeakeasyBase {
    linkedAccount?: string;
    linkedAccountName?: string;
    region?: string;
    service?: string;
    usageType?: string;
}
