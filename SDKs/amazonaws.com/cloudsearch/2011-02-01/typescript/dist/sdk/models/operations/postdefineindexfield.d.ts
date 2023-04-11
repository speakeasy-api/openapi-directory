import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDefineIndexFieldActionEnum {
    DefineIndexField = "DefineIndexField"
}
export declare enum POSTDefineIndexFieldVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class POSTDefineIndexFieldRequest extends SpeakeasyBase {
    action: POSTDefineIndexFieldActionEnum;
    requestBody?: Uint8Array;
    version: POSTDefineIndexFieldVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDefineIndexFieldResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
