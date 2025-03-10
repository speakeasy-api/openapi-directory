import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETListOpenIDConnectProviderTagsActionEnum {
    ListOpenIDConnectProviderTags = "ListOpenIDConnectProviderTags"
}
export declare enum GETListOpenIDConnectProviderTagsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETListOpenIDConnectProviderTagsRequest extends SpeakeasyBase {
    action: GETListOpenIDConnectProviderTagsActionEnum;
    /**
     * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.
     */
    marker?: string;
    /**
     * <p>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p> <p>If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code> contains a value to include in the subsequent call that tells the service where to continue from.</p>
     */
    maxItems?: number;
    /**
     * <p>The ARN of the OpenID Connect (OIDC) identity provider whose tags you want to see.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
     */
    openIDConnectProviderArn: string;
    version: GETListOpenIDConnectProviderTagsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETListOpenIDConnectProviderTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
