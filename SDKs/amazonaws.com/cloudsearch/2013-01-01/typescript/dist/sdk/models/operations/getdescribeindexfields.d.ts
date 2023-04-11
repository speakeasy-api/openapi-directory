import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeIndexFieldsActionEnum {
    DescribeIndexFields = "DescribeIndexFields"
}
export declare enum GETDescribeIndexFieldsVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class GETDescribeIndexFieldsRequest extends SpeakeasyBase {
    action: GETDescribeIndexFieldsActionEnum;
    /**
     * Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.
     */
    deployed?: boolean;
    /**
     * The name of the domain you want to describe.
     */
    domainName: string;
    /**
     * A list of the index fields you want to describe. If not specified, information is returned for all configured index fields.
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
