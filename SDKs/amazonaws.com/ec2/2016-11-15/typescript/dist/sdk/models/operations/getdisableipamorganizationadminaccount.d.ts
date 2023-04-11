import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDisableIpamOrganizationAdminAccountActionEnum {
    DisableIpamOrganizationAdminAccount = "DisableIpamOrganizationAdminAccount"
}
export declare enum GETDisableIpamOrganizationAdminAccountVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDisableIpamOrganizationAdminAccountRequest extends SpeakeasyBase {
    action: GETDisableIpamOrganizationAdminAccountActionEnum;
    /**
     * The Organizations member account ID that you want to disable as IPAM account.
     */
    delegatedAdminAccountId: string;
    /**
     * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    version: GETDisableIpamOrganizationAdminAccountVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDisableIpamOrganizationAdminAccountResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
