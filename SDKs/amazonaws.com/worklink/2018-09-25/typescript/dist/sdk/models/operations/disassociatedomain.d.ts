import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DisassociateDomainRequestBody extends SpeakeasyBase {
    /**
     * The name of the domain.
     */
    domainName: string;
    /**
     * The ARN of the fleet.
     */
    fleetArn: string;
}
export declare class DisassociateDomainRequest extends SpeakeasyBase {
    requestBody: DisassociateDomainRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisassociateDomainResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disassociateDomainResponse?: Record<string, any>;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
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
