import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTUpdateSecurityGroupRuleDescriptionsIngressActionEnum {
    UpdateSecurityGroupRuleDescriptionsIngress = "UpdateSecurityGroupRuleDescriptionsIngress"
}
export declare enum POSTUpdateSecurityGroupRuleDescriptionsIngressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTUpdateSecurityGroupRuleDescriptionsIngressRequest extends SpeakeasyBase {
    action: POSTUpdateSecurityGroupRuleDescriptionsIngressActionEnum;
    requestBody?: Uint8Array;
    version: POSTUpdateSecurityGroupRuleDescriptionsIngressVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTUpdateSecurityGroupRuleDescriptionsIngressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
