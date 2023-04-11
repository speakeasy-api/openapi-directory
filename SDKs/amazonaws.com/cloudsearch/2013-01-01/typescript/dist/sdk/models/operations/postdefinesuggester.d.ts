import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDefineSuggesterActionEnum {
    DefineSuggester = "DefineSuggester"
}
export declare enum POSTDefineSuggesterVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class POSTDefineSuggesterRequest extends SpeakeasyBase {
    action: POSTDefineSuggesterActionEnum;
    requestBody?: Uint8Array;
    version: POSTDefineSuggesterVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDefineSuggesterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
