import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyCustomDBEngineVersionActionEnum {
    ModifyCustomDBEngineVersion = "ModifyCustomDBEngineVersion"
}
export declare enum POSTModifyCustomDBEngineVersionVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTModifyCustomDBEngineVersionRequest extends SpeakeasyBase {
    action: POSTModifyCustomDBEngineVersionActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyCustomDBEngineVersionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyCustomDBEngineVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
