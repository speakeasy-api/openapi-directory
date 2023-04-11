import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateSiteRequestBody extends SpeakeasyBase {
    /**
     * Token used for detecting replayed requests. Replayed requests will not be performed multiple times.
     */
    clientToken?: string;
    /**
     * A valid ISO 3166-1 alpha-2 code for the country in which the site resides. e.g., US.
     */
    countryCode: string;
    /**
     * A high-level description of the site.
     */
    description?: string;
    /**
     * Human friendly name of the resource.
     */
    name: string;
}
export declare class CreateSiteRequest extends SpeakeasyBase {
    requestBody: CreateSiteRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateSiteResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createSiteResponse?: shared.CreateSiteResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
