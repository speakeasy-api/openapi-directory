import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeprovisionIpamPoolCidrActionEnum {
    DeprovisionIpamPoolCidr = "DeprovisionIpamPoolCidr"
}
export declare enum POSTDeprovisionIpamPoolCidrVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDeprovisionIpamPoolCidrRequest extends SpeakeasyBase {
    action: POSTDeprovisionIpamPoolCidrActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeprovisionIpamPoolCidrVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeprovisionIpamPoolCidrResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
