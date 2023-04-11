import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCancelUpdateStackActionEnum {
    CancelUpdateStack = "CancelUpdateStack"
}
export declare enum GETCancelUpdateStackVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class GETCancelUpdateStackRequest extends SpeakeasyBase {
    action: GETCancelUpdateStackActionEnum;
    /**
     * A unique identifier for this <code>CancelUpdateStack</code> request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to cancel an update on a stack with the same name. You might retry <code>CancelUpdateStack</code> requests to ensure that CloudFormation successfully received them.
     */
    clientRequestToken?: string;
    /**
     * The name or the unique stack ID that's associated with the stack.
     */
    stackName: string;
    version: GETCancelUpdateStackVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCancelUpdateStackResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
