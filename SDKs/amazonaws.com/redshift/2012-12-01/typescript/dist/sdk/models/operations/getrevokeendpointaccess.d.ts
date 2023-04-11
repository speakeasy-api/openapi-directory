import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETRevokeEndpointAccessActionEnum {
    RevokeEndpointAccess = "RevokeEndpointAccess"
}
export declare enum GETRevokeEndpointAccessVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETRevokeEndpointAccessRequest extends SpeakeasyBase {
    /**
     * The Amazon Web Services account ID whose access is to be revoked.
     */
    account?: string;
    action: GETRevokeEndpointAccessActionEnum;
    /**
     * The cluster to revoke access from.
     */
    clusterIdentifier?: string;
    /**
     * Indicates whether to force the revoke action. If true, the Redshift-managed VPC endpoints associated with the endpoint authorization are also deleted.
     */
    force?: boolean;
    version: GETRevokeEndpointAccessVersionEnum;
    /**
     * The virtual private cloud (VPC) identifiers for which access is to be revoked.
     */
    vpcIds?: string[];
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETRevokeEndpointAccessResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
