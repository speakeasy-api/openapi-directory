import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeRiskConfigurationXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceDescribeRiskConfiguration = "AWSCognitoIdentityProviderService.DescribeRiskConfiguration"
}
export declare class DescribeRiskConfigurationRequest extends SpeakeasyBase {
    describeRiskConfigurationRequest: shared.DescribeRiskConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRiskConfigurationXAmzTargetEnum;
}
export declare class DescribeRiskConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeRiskConfigurationResponse?: shared.DescribeRiskConfigurationResponse;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * NotAuthorizedException
     */
    notAuthorizedException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * UserPoolAddOnNotEnabledException
     */
    userPoolAddOnNotEnabledException?: any;
}
