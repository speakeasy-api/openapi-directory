import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETEnableReachabilityAnalyzerOrganizationSharingActionEnum {
    EnableReachabilityAnalyzerOrganizationSharing = "EnableReachabilityAnalyzerOrganizationSharing"
}
export declare enum GETEnableReachabilityAnalyzerOrganizationSharingVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETEnableReachabilityAnalyzerOrganizationSharingRequest extends SpeakeasyBase {
    action: GETEnableReachabilityAnalyzerOrganizationSharingActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    version: GETEnableReachabilityAnalyzerOrganizationSharingVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETEnableReachabilityAnalyzerOrganizationSharingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
