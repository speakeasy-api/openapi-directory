import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAcceleratorXAmzTargetEnum {
    GlobalAcceleratorV20180706DescribeAccelerator = "GlobalAccelerator_V20180706.DescribeAccelerator"
}
export declare class DescribeAcceleratorRequest extends SpeakeasyBase {
    describeAcceleratorRequest: shared.DescribeAcceleratorRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAcceleratorXAmzTargetEnum;
}
export declare class DescribeAcceleratorResponse extends SpeakeasyBase {
    /**
     * AcceleratorNotFoundException
     */
    acceleratorNotFoundException?: any;
    contentType: string;
    /**
     * Success
     */
    describeAcceleratorResponse?: shared.DescribeAcceleratorResponse;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
