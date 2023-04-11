import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Thing group indexing configuration.
 */
export declare class UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration extends SpeakeasyBase {
    customFields?: shared.Field[];
    managedFields?: shared.Field[];
    thingGroupIndexingMode?: shared.ThingGroupIndexingModeEnum;
}
/**
 * The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing Thing Indexing</a>.
 */
export declare class UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration extends SpeakeasyBase {
    customFields?: shared.Field[];
    deviceDefenderIndexingMode?: shared.DeviceDefenderIndexingModeEnum;
    filter?: shared.IndexingFilter;
    managedFields?: shared.Field[];
    namedShadowIndexingMode?: shared.NamedShadowIndexingModeEnum;
    thingConnectivityIndexingMode?: shared.ThingConnectivityIndexingModeEnum;
    thingIndexingMode?: shared.ThingIndexingModeEnum;
}
export declare class UpdateIndexingConfigurationRequestBody extends SpeakeasyBase {
    /**
     * Thing group indexing configuration.
     */
    thingGroupIndexingConfiguration?: UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration;
    /**
     * The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing Thing Indexing</a>.
     */
    thingIndexingConfiguration?: UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration;
}
export declare class UpdateIndexingConfigurationRequest extends SpeakeasyBase {
    requestBody: UpdateIndexingConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateIndexingConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
    /**
     * Success
     */
    updateIndexingConfigurationResponse?: Record<string, any>;
}
