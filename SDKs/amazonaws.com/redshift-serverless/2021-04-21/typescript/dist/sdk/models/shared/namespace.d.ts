import { SpeakeasyBase } from "../../../internal/utils";
import { LogExportEnum } from "./logexportenum";
import { NamespaceStatusEnum } from "./namespacestatusenum";
/**
 * A collection of database objects and users.
 */
export declare class Namespace extends SpeakeasyBase {
    adminUsername?: string;
    creationDate?: Date;
    dbName?: string;
    defaultIamRoleArn?: string;
    iamRoles?: string[];
    kmsKeyId?: string;
    logExports?: LogExportEnum[];
    namespaceArn?: string;
    namespaceId?: string;
    namespaceName?: string;
    status?: NamespaceStatusEnum;
}
