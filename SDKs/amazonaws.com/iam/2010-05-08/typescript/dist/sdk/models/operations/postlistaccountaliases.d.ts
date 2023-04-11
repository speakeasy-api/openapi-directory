import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListAccountAliasesActionEnum {
    ListAccountAliases = "ListAccountAliases"
}
export declare enum POSTListAccountAliasesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTListAccountAliasesRequest extends SpeakeasyBase {
    action: POSTListAccountAliasesActionEnum;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxItems?: string;
    requestBody?: Uint8Array;
    version: POSTListAccountAliasesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListAccountAliasesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
