import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeListenersActionEnum {
    DescribeListeners = "DescribeListeners"
}
export declare enum POSTDescribeListenersVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class POSTDescribeListenersRequest extends SpeakeasyBase {
    action: POSTDescribeListenersActionEnum;
    /**
     * Pagination token
     */
    marker?: string;
    requestBody?: Uint8Array;
    version: POSTDescribeListenersVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeListenersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
