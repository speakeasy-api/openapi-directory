import { SpeakeasyBase } from "../../../internal/utils";
import { AccountAccessTypeEnum } from "./accountaccesstypeenum";
import { AuthenticationSummary } from "./authenticationsummary";
import { DataSourceTypeEnum } from "./datasourcetypeenum";
import { LicenseTypeEnum } from "./licensetypeenum";
import { NetworkAccessConfiguration } from "./networkaccessconfiguration";
import { NotificationDestinationTypeEnum } from "./notificationdestinationtypeenum";
import { PermissionTypeEnum } from "./permissiontypeenum";
import { VpcConfiguration } from "./vpcconfiguration";
import { WorkspaceStatusEnum } from "./workspacestatusenum";
/**
 * A structure containing information about an Amazon Managed Grafana workspace in your account.
 */
export declare class WorkspaceDescription extends SpeakeasyBase {
    accountAccessType?: AccountAccessTypeEnum;
    authentication: AuthenticationSummary;
    created: Date;
    dataSources: DataSourceTypeEnum[];
    description?: string;
    endpoint: string;
    freeTrialConsumed?: boolean;
    freeTrialExpiration?: Date;
    grafanaVersion: string;
    id: string;
    licenseExpiration?: Date;
    licenseType?: LicenseTypeEnum;
    modified: Date;
    name?: string;
    networkAccessControl?: NetworkAccessConfiguration;
    notificationDestinations?: NotificationDestinationTypeEnum[];
    organizationRoleName?: string;
    organizationalUnits?: string[];
    permissionType?: PermissionTypeEnum;
    stackSetName?: string;
    status: WorkspaceStatusEnum;
    tags?: Record<string, string>;
    vpcConfiguration?: VpcConfiguration;
    workspaceRoleArn?: string;
}
