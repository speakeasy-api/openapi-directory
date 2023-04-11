import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeComponentXAmzTargetEnum {
    Ec2WindowsBarleyServiceDescribeComponent = "EC2WindowsBarleyService.DescribeComponent"
}
export declare class DescribeComponentRequest extends SpeakeasyBase {
    describeComponentRequest: shared.DescribeComponentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeComponentXAmzTargetEnum;
}
export declare class DescribeComponentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeComponentResponse?: shared.DescribeComponentResponse;
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
     * ValidationException
     */
    validationException?: any;
}
