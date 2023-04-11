import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETSetStackPolicyActionEnum {
    SetStackPolicy = "SetStackPolicy"
}
export declare enum GETSetStackPolicyVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class GETSetStackPolicyRequest extends SpeakeasyBase {
    action: GETSetStackPolicyActionEnum;
    /**
     * The name or unique stack ID that you want to associate a policy with.
     */
    stackName: string;
    /**
     * Structure containing the stack policy body. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html"> Prevent updates to stack resources</a> in the CloudFormation User Guide. You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not both.
     */
    stackPolicyBody?: string;
    /**
     * Location of a file containing the stack policy. The URL must point to a policy (maximum size: 16 KB) located in an Amazon S3 bucket in the same Amazon Web Services Region as the stack. You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not both.
     */
    stackPolicyURL?: string;
    version: GETSetStackPolicyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETSetStackPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
