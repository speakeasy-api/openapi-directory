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
     * The name for your database of up to 64 alphanumeric characters. If you do not provide a name, Amazon Aurora will not create a database in the global database cluster you are creating.
     */
    databaseName?: string;
    /**
     * The deletion protection setting for the new global database. The global database can't be deleted when deletion protection is enabled.
     */
    deletionProtection?: boolean;
    /**
     * The name of the database engine to be used for this DB cluster.
     */
    engine?: string;
    /**
     * The engine version of the Aurora global database.
     */
    engineVersion?: string;
    /**
     * The cluster identifier of the new global database cluster.
     */
    globalClusterIdentifier?: string;
    /**
     * The Amazon Resource Name (ARN) to use as the primary cluster of the global database. This parameter is optional.
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
