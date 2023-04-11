import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateCompanyNetworkConfigurationRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the fleet.
     */
    fleetArn: string;
    /**
     * The security groups associated with access to the provided subnets.
     */
    securityGroupIds: string[];
    /**
     * The subnets used for X-ENI connections from Amazon WorkLink rendering containers.
     */
    subnetIds: string[];
    /**
     * The VPC with connectivity to associated websites.
     */
    vpcId: string;
}
export declare class UpdateCompanyNetworkConfigurationRequest extends SpeakeasyBase {
    requestBody: UpdateCompanyNetworkConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateCompanyNetworkConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
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
     * UnauthorizedException
     */
    unauthorizedException?: any;
    /**
     * Success
     */
    updateCompanyNetworkConfigurationResponse?: Record<string, any>;
}
