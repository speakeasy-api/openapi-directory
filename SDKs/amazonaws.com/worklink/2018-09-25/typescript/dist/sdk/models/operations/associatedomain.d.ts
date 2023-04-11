import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AssociateDomainRequestBody extends SpeakeasyBase {
    /**
     * The ARN of an issued ACM certificate that is valid for the domain being associated.
     */
    acmCertificateArn: string;
    /**
     * The name to display.
     */
    displayName?: string;
    /**
     * The fully qualified domain name (FQDN).
     */
    domainName: string;
    /**
     * The Amazon Resource Name (ARN) of the fleet.
     */
    fleetArn: string;
}
export declare class AssociateDomainRequest extends SpeakeasyBase {
    requestBody: AssociateDomainRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AssociateDomainResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateDomainResponse?: Record<string, any>;
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
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
