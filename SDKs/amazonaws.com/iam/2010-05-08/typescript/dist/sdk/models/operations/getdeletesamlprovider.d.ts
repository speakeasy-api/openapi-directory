import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteSAMLProviderActionEnum {
    DeleteSAMLProvider = "DeleteSAMLProvider"
}
export declare enum GETDeleteSAMLProviderVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETDeleteSAMLProviderRequest extends SpeakeasyBase {
    action: GETDeleteSAMLProviderActionEnum;
    /**
     * The Amazon Resource Name (ARN) of the SAML provider to delete.
     */
    samlProviderArn: string;
    version: GETDeleteSAMLProviderVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteSAMLProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
