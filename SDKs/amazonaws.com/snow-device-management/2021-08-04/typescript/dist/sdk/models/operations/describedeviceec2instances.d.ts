import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeDeviceEc2InstancesRequestBody extends SpeakeasyBase {
    /**
     * A list of instance IDs associated with the managed device.
     */
    instanceIds: string[];
}
export declare class DescribeDeviceEc2InstancesRequest extends SpeakeasyBase {
    requestBody: DescribeDeviceEc2InstancesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the managed device.
     */
    managedDeviceId: string;
}
export declare class DescribeDeviceEc2InstancesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeDeviceEc2Output?: shared.DescribeDeviceEc2Output;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
