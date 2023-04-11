import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTUpdateSecurityGroupRuleDescriptionsEgressActionEnum {
    UpdateSecurityGroupRuleDescriptionsEgress = "UpdateSecurityGroupRuleDescriptionsEgress"
}
export declare enum POSTUpdateSecurityGroupRuleDescriptionsEgressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTUpdateSecurityGroupRuleDescriptionsEgressRequest extends SpeakeasyBase {
    action: POSTUpdateSecurityGroupRuleDescriptionsEgressActionEnum;
    requestBody?: Uint8Array;
    version: POSTUpdateSecurityGroupRuleDescriptionsEgressVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTUpdateSecurityGroupRuleDescriptionsEgressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
