import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeOrderableDBInstanceOptionsActionEnum {
    DescribeOrderableDBInstanceOptions = "DescribeOrderableDBInstanceOptions"
}
export declare enum GETDescribeOrderableDBInstanceOptionsVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GETDescribeOrderableDBInstanceOptionsRequest extends SpeakeasyBase {
    action: GETDescribeOrderableDBInstanceOptionsActionEnum;
    dbInstanceClass?: string;
    engine: string;
    engineVersion?: string;
    licenseModel?: string;
    marker?: string;
    maxRecords?: number;
    version: GETDescribeOrderableDBInstanceOptionsVersionEnum;
    vpc?: boolean;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeOrderableDBInstanceOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
