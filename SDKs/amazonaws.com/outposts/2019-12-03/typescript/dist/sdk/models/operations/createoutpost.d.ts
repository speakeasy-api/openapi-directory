import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  The type of hardware for this Outpost.
 */
export declare enum CreateOutpostRequestBodySupportedHardwareTypeEnum {
    Rack = "RACK",
    Server = "SERVER"
}
export declare class CreateOutpostRequestBody extends SpeakeasyBase {
    /**
     * The Availability Zone.
     */
    availabilityZone?: string;
    /**
     * The ID of the Availability Zone.
     */
    availabilityZoneId?: string;
    /**
     * The description of the Outpost.
     */
    description?: string;
    /**
     * The name of the Outpost.
     */
    name: string;
    /**
     * The ID of the site.
     */
    siteId: string;
    /**
     *  The type of hardware for this Outpost.
     */
    supportedHardwareType?: CreateOutpostRequestBodySupportedHardwareTypeEnum;
    /**
     * The tags to apply to the Outpost.
     */
    tags?: Record<string, string>;
}
export declare class CreateOutpostRequest extends SpeakeasyBase {
    requestBody: CreateOutpostRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateOutpostResponse extends SpeakeasyBase {
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
    createOutpostOutput?: shared.CreateOutpostOutput;
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
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
