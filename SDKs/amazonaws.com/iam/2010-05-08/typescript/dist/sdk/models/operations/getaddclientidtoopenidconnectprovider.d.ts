import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETAddClientIDToOpenIDConnectProviderActionEnum {
    AddClientIDToOpenIDConnectProvider = "AddClientIDToOpenIDConnectProvider"
}
export declare enum GETAddClientIDToOpenIDConnectProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETAddClientIDToOpenIDConnectProviderRequest extends SpeakeasyBase {
    action: GETAddClientIDToOpenIDConnectProviderActionEnum;
    /**
     * The client ID (also known as audience) to add to the IAM OpenID Connect provider resource.
     */
    clientID: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM OpenID Connect (OIDC) provider resource to add the client ID to. You can get a list of OIDC provider ARNs by using the <a>ListOpenIDConnectProviders</a> operation.
     */
    openIDConnectProviderArn: string;
    version: GETAddClientIDToOpenIDConnectProviderVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETAddClientIDToOpenIDConnectProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
