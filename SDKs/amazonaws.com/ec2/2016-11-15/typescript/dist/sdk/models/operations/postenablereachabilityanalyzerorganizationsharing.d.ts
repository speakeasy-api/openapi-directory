import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTEnableReachabilityAnalyzerOrganizationSharingActionEnum {
    EnableReachabilityAnalyzerOrganizationSharing = "EnableReachabilityAnalyzerOrganizationSharing"
}
export declare enum POSTEnableReachabilityAnalyzerOrganizationSharingVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTEnableReachabilityAnalyzerOrganizationSharingRequest extends SpeakeasyBase {
    action: POSTEnableReachabilityAnalyzerOrganizationSharingActionEnum;
    requestBody?: Uint8Array;
    version: POSTEnableReachabilityAnalyzerOrganizationSharingVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTEnableReachabilityAnalyzerOrganizationSharingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
