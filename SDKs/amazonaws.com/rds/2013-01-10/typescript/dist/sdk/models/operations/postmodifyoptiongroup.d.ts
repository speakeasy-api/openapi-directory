import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyOptionGroupActionEnum {
    ModifyOptionGroup = "ModifyOptionGroup"
}
export declare enum POSTModifyOptionGroupVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class POSTModifyOptionGroupRequest extends SpeakeasyBase {
    action: POSTModifyOptionGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyOptionGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyOptionGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
