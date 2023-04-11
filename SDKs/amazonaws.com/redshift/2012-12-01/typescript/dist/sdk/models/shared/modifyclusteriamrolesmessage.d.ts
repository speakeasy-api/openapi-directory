import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
 */
export declare class ModifyClusterIamRolesMessage extends SpeakeasyBase {
    addIamRoles?: string[];
    clusterIdentifier: string;
    defaultIamRoleArn?: string;
    removeIamRoles?: string[];
}
