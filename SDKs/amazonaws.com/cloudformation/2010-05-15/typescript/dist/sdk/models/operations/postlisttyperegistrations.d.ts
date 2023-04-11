import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListTypeRegistrationsActionEnum {
    ListTypeRegistrations = "ListTypeRegistrations"
}
export declare enum POSTListTypeRegistrationsVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTListTypeRegistrationsRequest extends SpeakeasyBase {
    action: POSTListTypeRegistrationsActionEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTListTypeRegistrationsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListTypeRegistrationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
