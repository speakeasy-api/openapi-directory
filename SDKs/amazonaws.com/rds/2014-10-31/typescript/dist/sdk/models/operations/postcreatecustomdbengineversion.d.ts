import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateCustomDBEngineVersionActionEnum {
    CreateCustomDBEngineVersion = "CreateCustomDBEngineVersion"
}
export declare enum POSTCreateCustomDBEngineVersionVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTCreateCustomDBEngineVersionRequest extends SpeakeasyBase {
    action: POSTCreateCustomDBEngineVersionActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateCustomDBEngineVersionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateCustomDBEngineVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
