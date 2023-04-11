import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTProvisionIpamPoolCidrActionEnum {
    ProvisionIpamPoolCidr = "ProvisionIpamPoolCidr"
}
export declare enum POSTProvisionIpamPoolCidrVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTProvisionIpamPoolCidrRequest extends SpeakeasyBase {
    action: POSTProvisionIpamPoolCidrActionEnum;
    requestBody?: Uint8Array;
    version: POSTProvisionIpamPoolCidrVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTProvisionIpamPoolCidrResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
