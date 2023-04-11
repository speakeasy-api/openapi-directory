import { SpeakeasyBase } from "../../../internal/utils";
import { DatasourcePackageIngestStateEnum } from "./datasourcepackageingeststateenum";
import { DatasourcePackageUsageInfo } from "./datasourcepackageusageinfo";
import { InvitationTypeEnum } from "./invitationtypeenum";
import { MemberDisabledReasonEnum } from "./memberdisabledreasonenum";
import { MemberStatusEnum } from "./memberstatusenum";
/**
 * Details about a member account in a behavior graph.
 */
export declare class MemberDetail extends SpeakeasyBase {
    accountId?: string;
    administratorId?: string;
    datasourcePackageIngestStates?: Record<string, DatasourcePackageIngestStateEnum>;
    disabledReason?: MemberDisabledReasonEnum;
    emailAddress?: string;
    graphArn?: string;
    invitationType?: InvitationTypeEnum;
    invitedTime?: Date;
    masterId?: string;
    percentOfGraphUtilization?: number;
    percentOfGraphUtilizationUpdatedTime?: Date;
    status?: MemberStatusEnum;
    updatedTime?: Date;
    volumeUsageByDatasourcePackage?: Record<string, DatasourcePackageUsageInfo>;
    volumeUsageInBytes?: number;
    volumeUsageUpdatedTime?: Date;
}
