import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeDomainRequestBody extends SpeakeasyBase {
    /**
     * The name of the domain.
     */
    domainName: string;
    /**
     * The ARN of the fleet.
     */
    fleetArn: string;
}
export declare class DescribeDomainRequest extends SpeakeasyBase {
    requestBody: DescribeDomainRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeDomainResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeDomainResponse?: shared.DescribeDomainResponse;
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
