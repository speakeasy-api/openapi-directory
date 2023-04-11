import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeComponentConfigurationXAmzTargetEnum {
    Ec2WindowsBarleyServiceDescribeComponentConfiguration = "EC2WindowsBarleyService.DescribeComponentConfiguration"
}
export declare class DescribeComponentConfigurationRequest extends SpeakeasyBase {
    describeComponentConfigurationRequest: shared.DescribeComponentConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeComponentConfigurationXAmzTargetEnum;
}
export declare class DescribeComponentConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeComponentConfigurationResponse?: shared.DescribeComponentConfigurationResponse;
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
