import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteSuggesterActionEnum {
    DeleteSuggester = "DeleteSuggester"
}
export declare enum GETDeleteSuggesterVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class GETDeleteSuggesterRequest extends SpeakeasyBase {
    action: GETDeleteSuggesterActionEnum;
    domainName: string;
    /**
     * Specifies the name of the suggester you want to delete.
     */
    suggesterName: string;
    version: GETDeleteSuggesterVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteSuggesterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
