import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details discovered information about a running instance using Linux subscriptions.
 */
export declare class Instance extends SpeakeasyBase {
    accountID?: string;
    amiId?: string;
    instanceID?: string;
    instanceType?: string;
    lastUpdatedTime?: string;
    productCode?: string[];
    region?: string;
    status?: string;
    subscriptionName?: string;
    usageOperation?: string;
}
