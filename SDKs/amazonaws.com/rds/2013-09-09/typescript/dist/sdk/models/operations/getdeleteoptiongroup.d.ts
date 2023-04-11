import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteOptionGroupActionEnum {
    DeleteOptionGroup = "DeleteOptionGroup"
}
export declare enum GETDeleteOptionGroupVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}
export declare class GETDeleteOptionGroupRequest extends SpeakeasyBase {
    action: GETDeleteOptionGroupActionEnum;
    optionGroupName: string;
    version: GETDeleteOptionGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteOptionGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
