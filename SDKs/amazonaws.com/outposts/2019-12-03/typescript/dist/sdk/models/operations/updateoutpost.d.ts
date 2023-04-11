import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  The type of hardware for this Outpost.
 */
export declare enum UpdateOutpostRequestBodySupportedHardwareTypeEnum {
    Rack = "RACK",
    Server = "SERVER"
}
export declare class UpdateOutpostRequestBody extends SpeakeasyBase {
    /**
     * The description of the Outpost.
     */
    description?: string;
    /**
     * The name of the Outpost.
     */
    name?: string;
    /**
     *  The type of hardware for this Outpost.
     */
    supportedHardwareType?: UpdateOutpostRequestBodySupportedHardwareTypeEnum;
}
export declare class UpdateOutpostRequest extends SpeakeasyBase {
    /**
     *  The ID or the Amazon Resource Name (ARN) of the Outpost.
     */
    outpostId: string;
    requestBody: UpdateOutpostRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateOutpostResponse extends SpeakeasyBase {
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
    updateOutpostOutput?: shared.UpdateOutpostOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
