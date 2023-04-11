import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeIndexFieldsActionEnum {
    DescribeIndexFields = "DescribeIndexFields"
}
export declare enum GETDescribeIndexFieldsVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class GETDescribeIndexFieldsRequest extends SpeakeasyBase {
    action: GETDescribeIndexFieldsActionEnum;
    domainName: string;
    /**
     * Limits the <code>DescribeIndexFields</code> response to the specified fields.
     */
    fieldNames?: string[];
    version: GETDescribeIndexFieldsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeIndexFieldsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
