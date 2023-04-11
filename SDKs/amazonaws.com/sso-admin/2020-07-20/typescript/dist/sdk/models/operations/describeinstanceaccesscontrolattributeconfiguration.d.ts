import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeInstanceAccessControlAttributeConfigurationXAmzTargetEnum {
    SWBExternalServiceDescribeInstanceAccessControlAttributeConfiguration = "SWBExternalService.DescribeInstanceAccessControlAttributeConfiguration"
}
export declare class DescribeInstanceAccessControlAttributeConfigurationRequest extends SpeakeasyBase {
    describeInstanceAccessControlAttributeConfigurationRequest: shared.DescribeInstanceAccessControlAttributeConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeInstanceAccessControlAttributeConfigurationXAmzTargetEnum;
}
export declare class DescribeInstanceAccessControlAttributeConfigurationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeInstanceAccessControlAttributeConfigurationResponse?: shared.DescribeInstanceAccessControlAttributeConfigurationResponse;
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
