import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDetachVerifiedAccessTrustProviderActionEnum {
    DetachVerifiedAccessTrustProvider = "DetachVerifiedAccessTrustProvider"
}
export declare enum POSTDetachVerifiedAccessTrustProviderVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDetachVerifiedAccessTrustProviderRequest extends SpeakeasyBase {
    action: POSTDetachVerifiedAccessTrustProviderActionEnum;
    requestBody?: Uint8Array;
    version: POSTDetachVerifiedAccessTrustProviderVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDetachVerifiedAccessTrustProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
