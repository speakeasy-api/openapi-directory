import { SpeakeasyBase } from "../../../internal/utils";
import { AuditContext } from "./auditcontext";
import { PermissionTypeEnum } from "./permissiontypeenum";
export declare class GetUnfilteredTableMetadataRequest extends SpeakeasyBase {
    auditContext?: AuditContext;
    catalogId: string;
    databaseName: string;
    name: string;
    supportedPermissionTypes: PermissionTypeEnum[];
}
