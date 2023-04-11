import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeAvailabilityOptionsActionEnum {
    DescribeAvailabilityOptions = "DescribeAvailabilityOptions"
}
export declare enum GETDescribeAvailabilityOptionsVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class GETDescribeAvailabilityOptionsRequest extends SpeakeasyBase {
    action: GETDescribeAvailabilityOptionsActionEnum;
    /**
     * The name of the domain you want to describe.
     */
    domainName: string;
    version: GETDescribeAvailabilityOptionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeAvailabilityOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
