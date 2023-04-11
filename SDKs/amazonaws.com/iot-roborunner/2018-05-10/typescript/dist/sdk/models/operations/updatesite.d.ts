import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateSiteRequestBody extends SpeakeasyBase {
    /**
     * A valid ISO 3166-1 alpha-2 code for the country in which the site resides. e.g., US.
     */
    countryCode?: string;
    /**
     * A high-level description of the site.
     */
    description?: string;
    /**
     * Site ARN.
     */
    id: string;
    /**
     * Human friendly name of the resource.
     */
    name?: string;
}
export declare class UpdateSiteRequest extends SpeakeasyBase {
    requestBody: UpdateSiteRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateSiteResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateSiteResponse?: shared.UpdateSiteResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
