import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Configuration settings for running telemetry.
 */
export declare class UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration extends SpeakeasyBase {
    telemetry?: shared.TelemetryEnum;
}
export declare class UpdateThingRuntimeConfigurationRequestBody extends SpeakeasyBase {
    /**
     * Configuration settings for running telemetry.
     */
    telemetryConfiguration?: UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration;
}
export declare class UpdateThingRuntimeConfigurationRequest extends SpeakeasyBase {
    requestBody: UpdateThingRuntimeConfigurationRequestBody;
    /**
     * The thing name.
     */
    thingName: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateThingRuntimeConfigurationResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateThingRuntimeConfigurationResponse?: Record<string, any>;
}
