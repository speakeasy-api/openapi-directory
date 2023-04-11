import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAddPartnerActionEnum {
    AddPartner = "AddPartner"
}
export declare enum POSTAddPartnerVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class POSTAddPartnerRequest extends SpeakeasyBase {
    action: POSTAddPartnerActionEnum;
    requestBody?: Uint8Array;
    version: POSTAddPartnerVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAddPartnerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
