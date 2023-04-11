import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribePublisherActionEnum {
    DescribePublisher = "DescribePublisher"
}
export declare enum GETDescribePublisherVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class GETDescribePublisherRequest extends SpeakeasyBase {
    action: GETDescribePublisherActionEnum;
    /**
     * <p>The ID of the extension publisher.</p> <p>If you don't supply a <code>PublisherId</code>, and you have registered as an extension publisher, <code>DescribePublisher</code> returns information about your own publisher account.</p>
     */
    publisherId?: string;
    version: GETDescribePublisherVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribePublisherResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
