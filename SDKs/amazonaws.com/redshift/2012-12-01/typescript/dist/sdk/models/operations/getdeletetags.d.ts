import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteTagsActionEnum {
    DeleteTags = "DeleteTags"
}
export declare enum GETDeleteTagsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETDeleteTagsRequest extends SpeakeasyBase {
    action: GETDeleteTagsActionEnum;
    /**
     * The Amazon Resource Name (ARN) from which you want to remove the tag or tags. For example, <code>arn:aws:redshift:us-east-2:123456789:cluster:t1</code>.
     */
    resourceName: string;
    /**
     * The tag key that you want to delete.
     */
    tagKeys: string[];
    version: GETDeleteTagsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
