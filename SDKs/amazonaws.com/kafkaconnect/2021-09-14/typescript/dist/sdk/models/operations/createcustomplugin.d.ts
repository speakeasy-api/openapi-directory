import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of the plugin file.
 */
export declare enum CreateCustomPluginRequestBodyContentTypeEnum {
    Jar = "JAR",
    Zip = "ZIP"
}
/**
 * Information about the location of a custom plugin.
 */
export declare class CreateCustomPluginRequestBodyLocation extends SpeakeasyBase {
    s3Location?: shared.S3Location;
}
export declare class CreateCustomPluginRequestBody extends SpeakeasyBase {
    /**
     * The type of the plugin file.
     */
    contentType: CreateCustomPluginRequestBodyContentTypeEnum;
    /**
     * A summary description of the custom plugin.
     */
    description?: string;
    /**
     * Information about the location of a custom plugin.
     */
    location: CreateCustomPluginRequestBodyLocation;
    /**
     * The name of the custom plugin.
     */
    name: string;
}
export declare class CreateCustomPluginRequest extends SpeakeasyBase {
    requestBody: CreateCustomPluginRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateCustomPluginResponse extends SpeakeasyBase {
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
    createCustomPluginResponse?: shared.CreateCustomPluginResponse;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
