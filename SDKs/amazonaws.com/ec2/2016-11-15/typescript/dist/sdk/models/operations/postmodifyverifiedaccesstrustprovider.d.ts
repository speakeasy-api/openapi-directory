import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyVerifiedAccessTrustProviderActionEnum {
    ModifyVerifiedAccessTrustProvider = "ModifyVerifiedAccessTrustProvider"
}
export declare enum POSTModifyVerifiedAccessTrustProviderVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTModifyVerifiedAccessTrustProviderRequest extends SpeakeasyBase {
    action: POSTModifyVerifiedAccessTrustProviderActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyVerifiedAccessTrustProviderVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyVerifiedAccessTrustProviderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
