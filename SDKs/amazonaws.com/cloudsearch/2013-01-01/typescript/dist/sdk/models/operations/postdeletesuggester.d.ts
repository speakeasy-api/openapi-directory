import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteSuggesterActionEnum {
    DeleteSuggester = "DeleteSuggester"
}
export declare enum POSTDeleteSuggesterVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class POSTDeleteSuggesterRequest extends SpeakeasyBase {
    action: POSTDeleteSuggesterActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteSuggesterVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteSuggesterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
