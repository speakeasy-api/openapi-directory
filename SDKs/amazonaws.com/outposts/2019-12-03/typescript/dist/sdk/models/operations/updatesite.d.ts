import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateSiteRequestBody extends SpeakeasyBase {
    /**
     * The description of the site.
     */
    description?: string;
    /**
     * The name of the site.
     */
    name?: string;
    /**
     * Notes about a site.
     */
    notes?: string;
}
export declare class UpdateSiteRequest extends SpeakeasyBase {
    requestBody: UpdateSiteRequestBody;
    /**
     *  The ID or the Amazon Resource Name (ARN) of the site.
     */
    siteId: string;
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
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateSiteOutput?: shared.UpdateSiteOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
