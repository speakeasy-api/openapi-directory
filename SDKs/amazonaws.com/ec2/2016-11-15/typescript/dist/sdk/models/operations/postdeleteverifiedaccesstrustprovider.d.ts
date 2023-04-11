import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteVerifiedAccessTrustProviderActionEnum {
    DeleteVerifiedAccessTrustProvider = "DeleteVerifiedAccessTrustProvider"
}
export declare enum POSTDeleteVerifiedAccessTrustProviderVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDeleteVerifiedAccessTrustProviderRequest extends SpeakeasyBase {
    action: POSTDeleteVerifiedAccessTrustProviderActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteVerifiedAccessTrustProviderVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteVerifiedAccessTrustProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
