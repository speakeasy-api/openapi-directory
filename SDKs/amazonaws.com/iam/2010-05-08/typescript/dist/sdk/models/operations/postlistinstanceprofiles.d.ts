import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListInstanceProfilesActionEnum {
    ListInstanceProfiles = "ListInstanceProfiles"
}
export declare enum POSTListInstanceProfilesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTListInstanceProfilesRequest extends SpeakeasyBase {
    action: POSTListInstanceProfilesActionEnum;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxItems?: string;
    requestBody?: Uint8Array;
    version: POSTListInstanceProfilesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListInstanceProfilesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
