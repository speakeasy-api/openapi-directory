import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeUserPoolDomainXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceDescribeUserPoolDomain = "AWSCognitoIdentityProviderService.DescribeUserPoolDomain"
}
export declare class DescribeUserPoolDomainRequest extends SpeakeasyBase {
    describeUserPoolDomainRequest: shared.DescribeUserPoolDomainRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeUserPoolDomainXAmzTargetEnum;
}
export declare class DescribeUserPoolDomainResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeUserPoolDomainResponse?: shared.DescribeUserPoolDomainResponse;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
