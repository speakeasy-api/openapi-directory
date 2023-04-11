import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeStacksActionEnum {
    DescribeStacks = "DescribeStacks"
}
export declare enum GETDescribeStacksVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class GETDescribeStacksRequest extends SpeakeasyBase {
    action: GETDescribeStacksActionEnum;
    /**
     * A string that identifies the next page of stacks that you want to retrieve.
     */
    nextToken?: string;
    /**
     * <p>The name or the unique stack ID that's associated with the stack, which aren't always interchangeable:</p> <ul> <li> <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p> </li> <li> <p>Deleted stacks: You must specify the unique stack ID.</p> </li> </ul> <p>Default: There is no default value.</p>
     */
    stackName?: string;
    version: GETDescribeStacksVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeStacksResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
