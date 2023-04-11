import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeServicesXAmzTargetEnum {
    AWSSupport20130415DescribeServices = "AWSSupport_20130415.DescribeServices"
}
export declare class DescribeServicesRequest extends SpeakeasyBase {
    describeServicesRequest: shared.DescribeServicesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeServicesXAmzTargetEnum;
}
export declare class DescribeServicesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeServicesResponse?: shared.DescribeServicesResponse;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
