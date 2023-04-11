import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETGETClusterCredentialsWithIAMActionEnum {
    GetClusterCredentialsWithIAM = "GetClusterCredentialsWithIAM"
}
export declare enum GETGETClusterCredentialsWithIAMVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETGETClusterCredentialsWithIAMRequest extends SpeakeasyBase {
    action: GETGETClusterCredentialsWithIAMActionEnum;
    /**
     * The unique identifier of the cluster that contains the database for which you are requesting credentials.
     */
    clusterIdentifier: string;
    /**
     * The name of the database for which you are requesting credentials. If the database name is specified, the IAM policy must allow access to the resource <code>dbname</code> for the specified database name. If the database name is not specified, access to all databases is allowed.
     */
    dbName?: string;
    /**
     * <p>The number of seconds until the returned temporary password expires.</p> <p>Range: 900-3600. Default: 900.</p>
     */
    durationSeconds?: number;
    version: GETGETClusterCredentialsWithIAMVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETGETClusterCredentialsWithIAMResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
