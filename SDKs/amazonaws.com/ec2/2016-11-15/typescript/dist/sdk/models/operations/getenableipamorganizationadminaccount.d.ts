import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETEnableIpamOrganizationAdminAccountActionEnum {
    EnableIpamOrganizationAdminAccount = "EnableIpamOrganizationAdminAccount"
}
export declare enum GETEnableIpamOrganizationAdminAccountVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETEnableIpamOrganizationAdminAccountRequest extends SpeakeasyBase {
    action: GETEnableIpamOrganizationAdminAccountActionEnum;
    /**
     * The Organizations member account ID that you want to enable as the IPAM account.
     */
    delegatedAdminAccountId: string;
    /**
     * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    version: GETEnableIpamOrganizationAdminAccountVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETEnableIpamOrganizationAdminAccountResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
