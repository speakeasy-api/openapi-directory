import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDisableIpamOrganizationAdminAccountActionEnum {
    DisableIpamOrganizationAdminAccount = "DisableIpamOrganizationAdminAccount"
}
export declare enum POSTDisableIpamOrganizationAdminAccountVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDisableIpamOrganizationAdminAccountRequest extends SpeakeasyBase {
    action: POSTDisableIpamOrganizationAdminAccountActionEnum;
    requestBody?: Uint8Array;
    version: POSTDisableIpamOrganizationAdminAccountVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDisableIpamOrganizationAdminAccountResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
