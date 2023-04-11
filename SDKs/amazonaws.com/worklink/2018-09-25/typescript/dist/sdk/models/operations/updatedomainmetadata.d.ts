import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateDomainMetadataRequestBody extends SpeakeasyBase {
    /**
     * The name to display.
     */
    displayName?: string;
    /**
     * The name of the domain.
     */
    domainName: string;
    /**
     * The ARN of the fleet.
     */
    fleetArn: string;
}
export declare class UpdateDomainMetadataRequest extends SpeakeasyBase {
    requestBody: UpdateDomainMetadataRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateDomainMetadataResponse extends SpeakeasyBase {
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
    updateDomainMetadataResponse?: Record<string, any>;
}
