import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteCustomDBEngineVersionActionEnum {
    DeleteCustomDBEngineVersion = "DeleteCustomDBEngineVersion"
}
export declare enum POSTDeleteCustomDBEngineVersionVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTDeleteCustomDBEngineVersionRequest extends SpeakeasyBase {
    action: POSTDeleteCustomDBEngineVersionActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteCustomDBEngineVersionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteCustomDBEngineVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
