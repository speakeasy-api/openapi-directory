import { SpeakeasyBase } from "../../../internal/utils";
import { PortalStatus } from "./portalstatus";
/**
 * Contains a portal summary.
 */
export declare class PortalSummary extends SpeakeasyBase {
    creationDate?: Date;
    description?: string;
    id: string;
    lastUpdateDate?: Date;
    name: string;
    roleArn?: string;
    startUrl: string;
    /**
     * Contains information about the current status of a portal.
     */
    status: PortalStatus;
}
