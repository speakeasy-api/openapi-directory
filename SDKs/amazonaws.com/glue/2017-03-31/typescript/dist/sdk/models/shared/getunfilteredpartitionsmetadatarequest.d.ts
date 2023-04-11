import { SpeakeasyBase } from "../../../internal/utils";
import { AuditContext } from "./auditcontext";
import { PermissionTypeEnum } from "./permissiontypeenum";
import { Segment } from "./segment";
export declare class GetUnfilteredPartitionsMetadataRequest extends SpeakeasyBase {
    auditContext?: AuditContext;
    catalogId: string;
    databaseName: string;
    expression?: string;
    maxResults?: number;
    nextToken?: string;
    segment?: Segment;
    supportedPermissionTypes: PermissionTypeEnum[];
    tableName: string;
}
