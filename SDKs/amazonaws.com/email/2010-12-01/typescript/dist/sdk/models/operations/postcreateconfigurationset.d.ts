import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateConfigurationSetActionEnum {
    CreateConfigurationSet = "CreateConfigurationSet"
}
export declare enum POSTCreateConfigurationSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTCreateConfigurationSetRequest extends SpeakeasyBase {
    action: POSTCreateConfigurationSetActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateConfigurationSetVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateConfigurationSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
