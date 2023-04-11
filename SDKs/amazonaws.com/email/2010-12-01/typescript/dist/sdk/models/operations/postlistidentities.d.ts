import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListIdentitiesActionEnum {
    ListIdentities = "ListIdentities"
}
export declare enum POSTListIdentitiesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTListIdentitiesRequest extends SpeakeasyBase {
    action: POSTListIdentitiesActionEnum;
    /**
     * Pagination limit
     */
    maxItems?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTListIdentitiesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListIdentitiesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
