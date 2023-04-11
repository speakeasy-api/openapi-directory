import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetInstanceTypesFromInstanceRequirementsActionEnum {
    GetInstanceTypesFromInstanceRequirements = "GetInstanceTypesFromInstanceRequirements"
}
export declare enum POSTGetInstanceTypesFromInstanceRequirementsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTGetInstanceTypesFromInstanceRequirementsRequest extends SpeakeasyBase {
    action: POSTGetInstanceTypesFromInstanceRequirementsActionEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTGetInstanceTypesFromInstanceRequirementsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetInstanceTypesFromInstanceRequirementsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
