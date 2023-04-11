import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETSignalResourceActionEnum {
    SignalResource = "SignalResource"
}
/**
 * The status of the signal, which is either success or failure. A failure signal causes CloudFormation to immediately fail the stack creation or update.
 */
export declare enum GETSignalResourceStatusEnum {
    Success = "SUCCESS",
    Failure = "FAILURE"
}
export declare enum GETSignalResourceVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class GETSignalResourceRequest extends SpeakeasyBase {
    action: GETSignalResourceActionEnum;
    /**
     * The logical ID of the resource that you want to signal. The logical ID is the name of the resource that given in the template.
     */
    logicalResourceId: string;
    /**
     * The stack name or unique stack ID that includes the resource that you want to signal.
     */
    stackName: string;
    /**
     * The status of the signal, which is either success or failure. A failure signal causes CloudFormation to immediately fail the stack creation or update.
     */
    status: GETSignalResourceStatusEnum;
    /**
     * A unique ID of the signal. When you signal Amazon EC2 instances or Auto Scaling groups, specify the instance ID that you are signaling as the unique ID. If you send multiple signals to a single resource (such as signaling a wait condition), each signal requires a different unique ID.
     */
    uniqueId: string;
    version: GETSignalResourceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETSignalResourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
