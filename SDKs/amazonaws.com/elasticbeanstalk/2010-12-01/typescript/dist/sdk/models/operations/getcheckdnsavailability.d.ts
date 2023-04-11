import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCheckDNSAvailabilityActionEnum {
    CheckDNSAvailability = "CheckDNSAvailability"
}
export declare enum GETCheckDNSAvailabilityVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETCheckDNSAvailabilityRequest extends SpeakeasyBase {
    action: GETCheckDNSAvailabilityActionEnum;
    /**
     * The prefix used when this CNAME is reserved.
     */
    cnamePrefix: string;
    version: GETCheckDNSAvailabilityVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCheckDNSAvailabilityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
