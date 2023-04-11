import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETRemoveRoleFromDBClusterActionEnum {
    RemoveRoleFromDBCluster = "RemoveRoleFromDBCluster"
}
export declare enum GETRemoveRoleFromDBClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETRemoveRoleFromDBClusterRequest extends SpeakeasyBase {
    action: GETRemoveRoleFromDBClusterActionEnum;
    /**
     * The name of the DB cluster to disassociate the IAM role from.
     */
    dbClusterIdentifier: string;
    /**
     * The name of the feature for the DB cluster that the IAM role is to be disassociated from. For information about supported feature names, see <a>DBEngineVersion</a>.
     */
    featureName?: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role to disassociate from the Aurora DB cluster, for example <code>arn:aws:iam::123456789012:role/AuroraAccessRole</code>.
     */
    roleArn: string;
    version: GETRemoveRoleFromDBClusterVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETRemoveRoleFromDBClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
