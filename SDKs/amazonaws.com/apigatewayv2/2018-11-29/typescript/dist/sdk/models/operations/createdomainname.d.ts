import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The mutual TLS authentication configuration for a custom domain name.
 */
export declare class CreateDomainNameRequestBodyMutualTlsAuthentication extends SpeakeasyBase {
    truststoreUri?: string;
    truststoreVersion?: string;
}
export declare class CreateDomainNameRequestBody extends SpeakeasyBase {
    /**
     * A string with a length between [1-512].
     */
    domainName: string;
    /**
     * The domain name configurations.
     */
    domainNameConfigurations?: shared.DomainNameConfiguration[];
    /**
     * The mutual TLS authentication configuration for a custom domain name.
     */
    mutualTlsAuthentication?: CreateDomainNameRequestBodyMutualTlsAuthentication;
    /**
     * Represents a collection of tags associated with the resource.
     */
    tags?: Record<string, string>;
}
export declare class CreateDomainNameRequest extends SpeakeasyBase {
    requestBody: CreateDomainNameRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateDomainNameResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * BadRequestException
     */
    badRequestException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createDomainNameResponse?: shared.CreateDomainNameResponse;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
