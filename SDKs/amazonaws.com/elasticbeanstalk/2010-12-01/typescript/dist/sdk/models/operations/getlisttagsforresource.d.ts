import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETListTagsForResourceActionEnum {
    ListTagsForResource = "ListTagsForResource"
}
export declare enum GETListTagsForResourceVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETListTagsForResourceRequest extends SpeakeasyBase {
    action: GETListTagsForResourceActionEnum;
    /**
     * <p>The Amazon Resource Name (ARN) of the resouce for which a tag list is requested.</p> <p>Must be the ARN of an Elastic Beanstalk resource.</p>
     */
    resourceArn: string;
    version: GETListTagsForResourceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETListTagsForResourceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
