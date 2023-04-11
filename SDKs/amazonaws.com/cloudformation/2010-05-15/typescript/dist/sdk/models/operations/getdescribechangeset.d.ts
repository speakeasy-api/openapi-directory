import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeChangeSetActionEnum {
    DescribeChangeSet = "DescribeChangeSet"
}
export declare enum GETDescribeChangeSetVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class GETDescribeChangeSetRequest extends SpeakeasyBase {
    action: GETDescribeChangeSetActionEnum;
    /**
     * The name or Amazon Resource Name (ARN) of the change set that you want to describe.
     */
    changeSetName: string;
    /**
     * A string (provided by the <a>DescribeChangeSet</a> response output) that identifies the next page of information that you want to retrieve.
     */
    nextToken?: string;
    /**
     * If you specified the name of a change set, specify the stack name or ID (ARN) of the change set you want to describe.
     */
    stackName?: string;
    version: GETDescribeChangeSetVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeChangeSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
