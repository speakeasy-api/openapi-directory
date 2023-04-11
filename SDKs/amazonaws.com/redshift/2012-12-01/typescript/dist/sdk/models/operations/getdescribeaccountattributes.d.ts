import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeAccountAttributesActionEnum {
    DescribeAccountAttributes = "DescribeAccountAttributes"
}
export declare enum GETDescribeAccountAttributesVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETDescribeAccountAttributesRequest extends SpeakeasyBase {
    action: GETDescribeAccountAttributesActionEnum;
    /**
     * A list of attribute names.
     */
    attributeNames?: string[];
    version: GETDescribeAccountAttributesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeAccountAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
