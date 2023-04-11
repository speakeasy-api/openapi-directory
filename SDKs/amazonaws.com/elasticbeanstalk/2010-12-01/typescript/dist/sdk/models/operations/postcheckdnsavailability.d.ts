import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCheckDNSAvailabilityActionEnum {
    CheckDNSAvailability = "CheckDNSAvailability"
}
export declare enum POSTCheckDNSAvailabilityVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTCheckDNSAvailabilityRequest extends SpeakeasyBase {
    action: POSTCheckDNSAvailabilityActionEnum;
    requestBody?: Uint8Array;
    version: POSTCheckDNSAvailabilityVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCheckDNSAvailabilityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
