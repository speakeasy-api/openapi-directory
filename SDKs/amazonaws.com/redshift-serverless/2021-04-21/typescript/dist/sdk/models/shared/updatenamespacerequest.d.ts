import { SpeakeasyBase } from "../../../internal/utils";
import { LogExportEnum } from "./logexportenum";
export declare class UpdateNamespaceRequest extends SpeakeasyBase {
    adminUserPassword?: string;
    adminUsername?: string;
    defaultIamRoleArn?: string;
    iamRoles?: string[];
    kmsKeyId?: string;
    logExports?: LogExportEnum[];
    namespaceName: string;
}
