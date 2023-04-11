import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteOptionGroupActionEnum {
    DeleteOptionGroup = "DeleteOptionGroup"
}
export declare enum POSTDeleteOptionGroupVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class POSTDeleteOptionGroupRequest extends SpeakeasyBase {
    action: POSTDeleteOptionGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteOptionGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteOptionGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
