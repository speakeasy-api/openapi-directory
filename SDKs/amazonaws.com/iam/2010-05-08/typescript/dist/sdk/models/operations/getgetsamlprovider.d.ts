import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETGETSAMLProviderActionEnum {
    GetSAMLProvider = "GetSAMLProvider"
}
export declare enum GETGETSAMLProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETGETSAMLProviderRequest extends SpeakeasyBase {
    action: GETGETSAMLProviderActionEnum;
    /**
     * <p>The Amazon Resource Name (ARN) of the SAML provider resource object in IAM to get information about.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.</p>
     */
    samlProviderArn: string;
    version: GETGETSAMLProviderVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETGETSAMLProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
