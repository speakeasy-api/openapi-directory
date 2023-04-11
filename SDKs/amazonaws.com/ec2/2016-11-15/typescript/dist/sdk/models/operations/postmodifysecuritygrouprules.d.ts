import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifySecurityGroupRulesActionEnum {
    ModifySecurityGroupRules = "ModifySecurityGroupRules"
}
export declare enum POSTModifySecurityGroupRulesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTModifySecurityGroupRulesRequest extends SpeakeasyBase {
    action: POSTModifySecurityGroupRulesActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifySecurityGroupRulesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifySecurityGroupRulesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
