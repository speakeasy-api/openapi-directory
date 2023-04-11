import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The mutual TLS authentication configuration for a custom domain name.
 */
export declare class UpdateDomainNameRequestBodyMutualTlsAuthentication extends SpeakeasyBase {
    truststoreUri?: string;
    truststoreVersion?: string;
}
export declare class UpdateDomainNameRequestBody extends SpeakeasyBase {
    /**
     * The domain name configurations.
     */
    domainNameConfigurations?: shared.DomainNameConfiguration[];
    /**
     * The mutual TLS authentication configuration for a custom domain name.
     */
    mutualTlsAuthentication?: UpdateDomainNameRequestBodyMutualTlsAuthentication;
}
export declare class UpdateDomainNameRequest extends SpeakeasyBase {
    requestBody: UpdateDomainNameRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The domain name.
     */
    domainName: string;
}
export declare class UpdateDomainNameResponse extends SpeakeasyBase {
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
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * Success
     */
    updateDomainNameResponse?: shared.UpdateDomainNameResponse;
}
