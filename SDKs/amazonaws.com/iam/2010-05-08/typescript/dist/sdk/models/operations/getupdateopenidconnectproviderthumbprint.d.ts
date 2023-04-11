import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETUpdateOpenIDConnectProviderThumbprintActionEnum {
    UpdateOpenIDConnectProviderThumbprint = "UpdateOpenIDConnectProviderThumbprint"
}
export declare enum GETUpdateOpenIDConnectProviderThumbprintVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETUpdateOpenIDConnectProviderThumbprintRequest extends SpeakeasyBase {
    action: GETUpdateOpenIDConnectProviderThumbprintActionEnum;
    /**
     * <p>The Amazon Resource Name (ARN) of the IAM OIDC provider resource object for which you want to update the thumbprint. You can get a list of OIDC provider ARNs by using the <a>ListOpenIDConnectProviders</a> operation.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
     */
    openIDConnectProviderArn: string;
    /**
     * A list of certificate thumbprints that are associated with the specified IAM OpenID Connect provider. For more information, see <a>CreateOpenIDConnectProvider</a>.
     */
    thumbprintList: string[];
    version: GETUpdateOpenIDConnectProviderThumbprintVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETUpdateOpenIDConnectProviderThumbprintResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
