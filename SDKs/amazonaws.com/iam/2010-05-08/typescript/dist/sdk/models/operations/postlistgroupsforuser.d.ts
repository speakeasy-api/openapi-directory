import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListGroupsForUserActionEnum {
    ListGroupsForUser = "ListGroupsForUser"
}
export declare enum POSTListGroupsForUserVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTListGroupsForUserRequest extends SpeakeasyBase {
    action: POSTListGroupsForUserActionEnum;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxItems?: string;
    requestBody?: Uint8Array;
    version: POSTListGroupsForUserVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListGroupsForUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
