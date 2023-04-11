import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETAddRoleToDBClusterActionEnum {
    AddRoleToDBCluster = "AddRoleToDBCluster"
}
export declare enum GETAddRoleToDBClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETAddRoleToDBClusterRequest extends SpeakeasyBase {
    action: GETAddRoleToDBClusterActionEnum;
    /**
     * The name of the DB cluster to associate the IAM role with.
     */
    dbClusterIdentifier: string;
    /**
     * The name of the feature for the Neptune DB cluster that the IAM role is to be associated with. For the list of supported feature names, see <a href="neptune/latest/userguide/api-other-apis.html#DBEngineVersion">DBEngineVersion</a>.
     */
    featureName?: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role to associate with the Neptune DB cluster, for example <code>arn:aws:iam::123456789012:role/NeptuneAccessRole</code>.
     */
    roleArn: string;
    version: GETAddRoleToDBClusterVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETAddRoleToDBClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
