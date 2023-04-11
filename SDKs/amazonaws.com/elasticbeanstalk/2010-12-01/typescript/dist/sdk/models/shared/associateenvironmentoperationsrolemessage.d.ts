import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to add or change the operations role used by an environment.
 */
export declare class AssociateEnvironmentOperationsRoleMessage extends SpeakeasyBase {
    environmentName: string;
    operationsRole: string;
}
