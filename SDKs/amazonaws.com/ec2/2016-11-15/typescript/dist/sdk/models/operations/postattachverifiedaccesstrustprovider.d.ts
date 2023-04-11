import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAttachVerifiedAccessTrustProviderActionEnum {
    AttachVerifiedAccessTrustProvider = "AttachVerifiedAccessTrustProvider"
}
export declare enum POSTAttachVerifiedAccessTrustProviderVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTAttachVerifiedAccessTrustProviderRequest extends SpeakeasyBase {
    action: POSTAttachVerifiedAccessTrustProviderActionEnum;
    requestBody?: Uint8Array;
    version: POSTAttachVerifiedAccessTrustProviderVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAttachVerifiedAccessTrustProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
