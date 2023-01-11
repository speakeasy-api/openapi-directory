import { SpeakeasyBase } from "../../../internal/utils";
export declare class Account extends SpeakeasyBase {
    active?: number;
    createdDate?: string;
    email?: string;
    firstName?: string;
    groupId?: number;
    id?: number;
    institutionId?: number;
    institutionUserId?: string;
    lastName?: string;
    maximumFileSize?: number;
    modifiedDate?: string;
    pendingQuotaRequest?: boolean;
    quota?: number;
    usedQuota?: number;
    usedQuotaPrivate?: number;
    usedQuotaPublic?: number;
}
