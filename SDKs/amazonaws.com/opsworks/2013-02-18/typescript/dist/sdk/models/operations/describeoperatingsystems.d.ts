import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeOperatingSystemsXAmzTargetEnum {
    OpsWorks20130218DescribeOperatingSystems = "OpsWorks_20130218.DescribeOperatingSystems"
}
export declare class DescribeOperatingSystemsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeOperatingSystemsXAmzTargetEnum;
}
export declare class DescribeOperatingSystemsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeOperatingSystemsResponse?: shared.DescribeOperatingSystemsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
