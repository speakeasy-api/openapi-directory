import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeChangeSetHooksActionEnum {
    DescribeChangeSetHooks = "DescribeChangeSetHooks"
}
export declare enum GETDescribeChangeSetHooksVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class GETDescribeChangeSetHooksRequest extends SpeakeasyBase {
    action: GETDescribeChangeSetHooksActionEnum;
    /**
     * The name or Amazon Resource Name (ARN) of the change set that you want to describe.
     */
    changeSetName: string;
    /**
     * If specified, lists only the hooks related to the specified <code>LogicalResourceId</code>.
     */
    logicalResourceId?: string;
    /**
     * A string, provided by the <code>DescribeChangeSetHooks</code> response output, that identifies the next page of information that you want to retrieve.
     */
    nextToken?: string;
    /**
     * If you specified the name of a change set, specify the stack name or stack ID (ARN) of the change set you want to describe.
     */
    stackName?: string;
    version: GETDescribeChangeSetHooksVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeChangeSetHooksResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
