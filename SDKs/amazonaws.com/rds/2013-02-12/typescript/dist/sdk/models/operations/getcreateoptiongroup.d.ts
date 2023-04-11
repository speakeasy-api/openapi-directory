import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCreateOptionGroupActionEnum {
    CreateOptionGroup = "CreateOptionGroup"
}
export declare enum GETCreateOptionGroupVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class GETCreateOptionGroupRequest extends SpeakeasyBase {
    action: GETCreateOptionGroupActionEnum;
    engineName: string;
    majorEngineVersion: string;
    optionGroupDescription: string;
    optionGroupName: string;
    version: GETCreateOptionGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCreateOptionGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
