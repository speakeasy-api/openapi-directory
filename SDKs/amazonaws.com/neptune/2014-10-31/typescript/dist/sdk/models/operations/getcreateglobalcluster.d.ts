import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCreateGlobalClusterActionEnum {
    CreateGlobalCluster = "CreateGlobalCluster"
}
export declare enum GETCreateGlobalClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETCreateGlobalClusterRequest extends SpeakeasyBase {
    action: GETCreateGlobalClusterActionEnum;
    /**
     * The deletion protection setting for the new global database. The global database can't be deleted when deletion protection is enabled.
     */
    deletionProtection?: boolean;
    /**
     * <p>The name of the database engine to be used in the global database.</p> <p>Valid values: <code>neptune</code> </p>
     */
    engine?: string;
    /**
     * <p>The Neptune engine version to be used by the global database.</p> <p>Valid values: <code>1.2.0.0</code> or above.</p>
     */
    engineVersion?: string;
    /**
     * The cluster identifier of the new global database cluster.
     */
    globalClusterIdentifier: string;
    /**
     * (<i>Optional</i>) The Amazon Resource Name (ARN) of an existing Neptune DB cluster to use as the primary cluster of the new global database.
     */
    sourceDBClusterIdentifier?: string;
    /**
     * The storage encryption setting for the new global database cluster.
     */
    storageEncrypted?: boolean;
    version: GETCreateGlobalClusterVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCreateGlobalClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
