import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkSiteStatusEnum } from "./networksitestatusenum";
import { SitePlan } from "./siteplan";
/**
 * Information about a network site.
 */
export declare class NetworkSite extends SpeakeasyBase {
    availabilityZone?: string;
    availabilityZoneId?: string;
    createdAt?: Date;
    currentPlan?: SitePlan;
    description?: string;
    networkArn: string;
    networkSiteArn: string;
    networkSiteName: string;
    pendingPlan?: SitePlan;
    status: NetworkSiteStatusEnum;
    statusReason?: string;
}
