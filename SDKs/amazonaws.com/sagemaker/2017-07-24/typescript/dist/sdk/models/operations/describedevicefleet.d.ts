import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeDeviceFleetXAmzTargetEnum {
    SageMakerDescribeDeviceFleet = "SageMaker.DescribeDeviceFleet"
}
export declare class DescribeDeviceFleetRequest extends SpeakeasyBase {
    describeDeviceFleetRequest: shared.DescribeDeviceFleetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDeviceFleetXAmzTargetEnum;
}
export declare class DescribeDeviceFleetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeDeviceFleetResponse?: shared.DescribeDeviceFleetResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
