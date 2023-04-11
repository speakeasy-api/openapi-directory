import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateVerifiedAccessTrustProviderActionEnum {
    CreateVerifiedAccessTrustProvider = "CreateVerifiedAccessTrustProvider"
}
export declare enum POSTCreateVerifiedAccessTrustProviderVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateVerifiedAccessTrustProviderRequest extends SpeakeasyBase {
    action: POSTCreateVerifiedAccessTrustProviderActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateVerifiedAccessTrustProviderVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateVerifiedAccessTrustProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
