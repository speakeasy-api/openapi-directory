import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTEnableIpamOrganizationAdminAccountActionEnum {
    EnableIpamOrganizationAdminAccount = "EnableIpamOrganizationAdminAccount"
}
export declare enum POSTEnableIpamOrganizationAdminAccountVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTEnableIpamOrganizationAdminAccountRequest extends SpeakeasyBase {
    action: POSTEnableIpamOrganizationAdminAccountActionEnum;
    requestBody?: Uint8Array;
    version: POSTEnableIpamOrganizationAdminAccountVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTEnableIpamOrganizationAdminAccountResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
