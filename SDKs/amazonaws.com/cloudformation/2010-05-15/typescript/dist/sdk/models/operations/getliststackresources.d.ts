import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETListStackResourcesActionEnum {
    ListStackResources = "ListStackResources"
}
export declare enum GETListStackResourcesVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class GETListStackResourcesRequest extends SpeakeasyBase {
    action: GETListStackResourcesActionEnum;
    /**
     * A string that identifies the next page of stack resources that you want to retrieve.
     */
    nextToken?: string;
    /**
     * <p>The name or the unique stack ID that is associated with the stack, which aren't always interchangeable:</p> <ul> <li> <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p> </li> <li> <p>Deleted stacks: You must specify the unique stack ID.</p> </li> </ul> <p>Default: There is no default value.</p>
     */
    stackName: string;
    version: GETListStackResourcesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETListStackResourcesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
