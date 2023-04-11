import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteOpenIDConnectProviderActionEnum {
    DeleteOpenIDConnectProvider = "DeleteOpenIDConnectProvider"
}
export declare enum GETDeleteOpenIDConnectProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETDeleteOpenIDConnectProviderRequest extends SpeakeasyBase {
    action: GETDeleteOpenIDConnectProviderActionEnum;
    /**
     * The Amazon Resource Name (ARN) of the IAM OpenID Connect provider resource object to delete. You can get a list of OpenID Connect provider resource ARNs by using the <a>ListOpenIDConnectProviders</a> operation.
     */
    openIDConnectProviderArn: string;
    version: GETDeleteOpenIDConnectProviderVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteOpenIDConnectProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
