import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeOrderableDBInstanceOptionsActionEnum {
    DescribeOrderableDBInstanceOptions = "DescribeOrderableDBInstanceOptions"
}
export declare enum POSTDescribeOrderableDBInstanceOptionsVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class POSTDescribeOrderableDBInstanceOptionsRequest extends SpeakeasyBase {
    action: POSTDescribeOrderableDBInstanceOptionsActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeOrderableDBInstanceOptionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeOrderableDBInstanceOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
