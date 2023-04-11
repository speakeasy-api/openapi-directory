import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeDeviceXAmzTargetEnum {
    SageMakerDescribeDevice = "SageMaker.DescribeDevice"
}
export declare class DescribeDeviceRequest extends SpeakeasyBase {
    describeDeviceRequest: shared.DescribeDeviceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDeviceXAmzTargetEnum;
}
export declare class DescribeDeviceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeDeviceResponse?: shared.DescribeDeviceResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
