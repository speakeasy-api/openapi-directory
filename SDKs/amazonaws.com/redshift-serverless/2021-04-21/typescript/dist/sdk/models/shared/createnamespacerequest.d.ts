import { SpeakeasyBase } from "../../../internal/utils";
import { LogExportEnum } from "./logexportenum";
import { Tag } from "./tag";
export declare class CreateNamespaceRequest extends SpeakeasyBase {
    adminUserPassword?: string;
    adminUsername?: string;
    dbName?: string;
    defaultIamRoleArn?: string;
    iamRoles?: string[];
    kmsKeyId?: string;
    logExports?: LogExportEnum[];
    namespaceName: string;
    tags?: Tag[];
}
