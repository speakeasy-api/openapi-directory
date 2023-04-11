import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAcceleratorAttributesXAmzTargetEnum {
    GlobalAcceleratorV20180706DescribeAcceleratorAttributes = "GlobalAccelerator_V20180706.DescribeAcceleratorAttributes"
}
export declare class DescribeAcceleratorAttributesRequest extends SpeakeasyBase {
    describeAcceleratorAttributesRequest: shared.DescribeAcceleratorAttributesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAcceleratorAttributesXAmzTargetEnum;
}
export declare class DescribeAcceleratorAttributesResponse extends SpeakeasyBase {
    /**
     * AcceleratorNotFoundException
     */
    acceleratorNotFoundException?: any;
    contentType: string;
    /**
     * Success
     */
    describeAcceleratorAttributesResponse?: shared.DescribeAcceleratorAttributesResponse;
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
