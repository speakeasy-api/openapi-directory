import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationSummary } from "./authenticationsummary";
import { NotificationDestinationTypeEnum } from "./notificationdestinationtypeenum";
import { WorkspaceStatusEnum } from "./workspacestatusenum";
/**
 * A structure that contains some information about one workspace in the account.
 */
export declare class WorkspaceSummary extends SpeakeasyBase {
    authentication: AuthenticationSummary;
    created: Date;
    description?: string;
    endpoint: string;
    grafanaVersion: string;
    id: string;
    modified: Date;
    name?: string;
    notificationDestinations?: NotificationDestinationTypeEnum[];
    status: WorkspaceStatusEnum;
    tags?: Record<string, string>;
}
