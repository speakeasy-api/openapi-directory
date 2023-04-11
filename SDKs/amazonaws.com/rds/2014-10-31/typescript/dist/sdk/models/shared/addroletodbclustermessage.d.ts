import { SpeakeasyBase } from "../../../internal/utils";
export declare class AddRoleToDBClusterMessage extends SpeakeasyBase {
    dbClusterIdentifier: string;
    featureName?: string;
    roleArn: string;
}
