import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListPlatformBranchesActionEnum {
    ListPlatformBranches = "ListPlatformBranches"
}
export declare enum POSTListPlatformBranchesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTListPlatformBranchesRequest extends SpeakeasyBase {
    action: POSTListPlatformBranchesActionEnum;
    /**
     * Pagination limit
     */
    maxRecords?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTListPlatformBranchesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListPlatformBranchesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
