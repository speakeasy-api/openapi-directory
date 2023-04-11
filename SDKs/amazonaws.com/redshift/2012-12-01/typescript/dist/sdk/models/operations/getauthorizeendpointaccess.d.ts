import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETAuthorizeEndpointAccessActionEnum {
    AuthorizeEndpointAccess = "AuthorizeEndpointAccess"
}
export declare enum GETAuthorizeEndpointAccessVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETAuthorizeEndpointAccessRequest extends SpeakeasyBase {
    /**
     * The Amazon Web Services account ID to grant access to.
     */
    account: string;
    action: GETAuthorizeEndpointAccessActionEnum;
    /**
     * The cluster identifier of the cluster to grant access to.
     */
    clusterIdentifier?: string;
    version: GETAuthorizeEndpointAccessVersionEnum;
    /**
     * The virtual private cloud (VPC) identifiers to grant access to.
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
export declare class GETAuthorizeEndpointAccessResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
