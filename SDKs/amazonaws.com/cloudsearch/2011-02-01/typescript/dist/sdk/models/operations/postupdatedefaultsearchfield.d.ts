import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTUpdateDefaultSearchFieldActionEnum {
    UpdateDefaultSearchField = "UpdateDefaultSearchField"
}
export declare enum POSTUpdateDefaultSearchFieldVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class POSTUpdateDefaultSearchFieldRequest extends SpeakeasyBase {
    action: POSTUpdateDefaultSearchFieldActionEnum;
    requestBody?: Uint8Array;
    version: POSTUpdateDefaultSearchFieldVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTUpdateDefaultSearchFieldResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
