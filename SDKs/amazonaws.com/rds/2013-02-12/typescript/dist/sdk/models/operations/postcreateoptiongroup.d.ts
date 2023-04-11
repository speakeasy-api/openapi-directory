import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateOptionGroupActionEnum {
    CreateOptionGroup = "CreateOptionGroup"
}
export declare enum POSTCreateOptionGroupVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class POSTCreateOptionGroupRequest extends SpeakeasyBase {
    action: POSTCreateOptionGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateOptionGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateOptionGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
