import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyIpamResourceCidrActionEnum {
    ModifyIpamResourceCidr = "ModifyIpamResourceCidr"
}
export declare enum POSTModifyIpamResourceCidrVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTModifyIpamResourceCidrRequest extends SpeakeasyBase {
    action: POSTModifyIpamResourceCidrActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyIpamResourceCidrVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyIpamResourceCidrResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
