import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListInstanceProfilesForRoleActionEnum {
    ListInstanceProfilesForRole = "ListInstanceProfilesForRole"
}
export declare enum POSTListInstanceProfilesForRoleVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTListInstanceProfilesForRoleRequest extends SpeakeasyBase {
    action: POSTListInstanceProfilesForRoleActionEnum;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxItems?: string;
    requestBody?: Uint8Array;
    version: POSTListInstanceProfilesForRoleVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListInstanceProfilesForRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
