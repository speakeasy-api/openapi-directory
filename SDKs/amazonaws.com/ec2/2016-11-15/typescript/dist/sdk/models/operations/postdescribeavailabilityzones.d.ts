import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeAvailabilityZonesActionEnum {
    DescribeAvailabilityZones = "DescribeAvailabilityZones"
}
export declare enum POSTDescribeAvailabilityZonesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDescribeAvailabilityZonesRequest extends SpeakeasyBase {
    action: POSTDescribeAvailabilityZonesActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeAvailabilityZonesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeAvailabilityZonesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
