import { SpeakeasyBase } from "../../../internal/utils";
import { AuditContext } from "./auditcontext";
import { PermissionTypeEnum } from "./permissiontypeenum";
export declare class GetUnfilteredPartitionMetadataRequest extends SpeakeasyBase {
    auditContext?: AuditContext;
    catalogId: string;
    databaseName: string;
    partitionValues: string[];
    supportedPermissionTypes: PermissionTypeEnum[];
    tableName: string;
}
