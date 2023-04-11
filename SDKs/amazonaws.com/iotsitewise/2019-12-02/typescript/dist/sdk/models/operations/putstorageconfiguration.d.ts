import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * <p>Contains the storage configuration for time series (data streams) that aren't associated with asset properties. The <code>disassociatedDataStorage</code> can be one of the following values:</p> <ul> <li> <p> <code>ENABLED</code> – IoT SiteWise accepts time series that aren't associated with asset properties.</p> <important> <p>After the <code>disassociatedDataStorage</code> is enabled, you can't disable it.</p> </important> </li> <li> <p> <code>DISABLED</code> – IoT SiteWise doesn't accept time series (data streams) that aren't associated with asset properties.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/data-streams.html">Data streams</a> in the <i>IoT SiteWise User Guide</i>.</p>
 */
export declare enum PutStorageConfigurationRequestBodyDisassociatedDataStorageEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
/**
 * Contains information about the storage destination.
 */
export declare class PutStorageConfigurationRequestBodyMultiLayerStorage extends SpeakeasyBase {
    customerManagedS3Storage?: shared.CustomerManagedS3Storage;
}
/**
 * How many days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier.
 */
export declare class PutStorageConfigurationRequestBodyRetentionPeriod extends SpeakeasyBase {
    numberOfDays?: number;
    unlimited?: boolean;
}
/**
 * <p>The storage tier that you specified for your data. The <code>storageType</code> parameter can be one of the following values:</p> <ul> <li> <p> <code>SITEWISE_DEFAULT_STORAGE</code> – IoT SiteWise saves your data into the hot tier. The hot tier is a service-managed database.</p> </li> <li> <p> <code>MULTI_LAYER_STORAGE</code> – IoT SiteWise saves your data in both the cold tier and the hot tier. The cold tier is a customer-managed Amazon S3 bucket.</p> </li> </ul>
 */
export declare enum PutStorageConfigurationRequestBodyStorageTypeEnum {
    SitewiseDefaultStorage = "SITEWISE_DEFAULT_STORAGE",
    MultiLayerStorage = "MULTI_LAYER_STORAGE"
}
export declare class PutStorageConfigurationRequestBody extends SpeakeasyBase {
    /**
     * <p>Contains the storage configuration for time series (data streams) that aren't associated with asset properties. The <code>disassociatedDataStorage</code> can be one of the following values:</p> <ul> <li> <p> <code>ENABLED</code> – IoT SiteWise accepts time series that aren't associated with asset properties.</p> <important> <p>After the <code>disassociatedDataStorage</code> is enabled, you can't disable it.</p> </important> </li> <li> <p> <code>DISABLED</code> – IoT SiteWise doesn't accept time series (data streams) that aren't associated with asset properties.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/data-streams.html">Data streams</a> in the <i>IoT SiteWise User Guide</i>.</p>
     */
    disassociatedDataStorage?: PutStorageConfigurationRequestBodyDisassociatedDataStorageEnum;
    /**
     * Contains information about the storage destination.
     */
    multiLayerStorage?: PutStorageConfigurationRequestBodyMultiLayerStorage;
    /**
     * How many days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier.
     */
    retentionPeriod?: PutStorageConfigurationRequestBodyRetentionPeriod;
    /**
     * <p>The storage tier that you specified for your data. The <code>storageType</code> parameter can be one of the following values:</p> <ul> <li> <p> <code>SITEWISE_DEFAULT_STORAGE</code> – IoT SiteWise saves your data into the hot tier. The hot tier is a service-managed database.</p> </li> <li> <p> <code>MULTI_LAYER_STORAGE</code> – IoT SiteWise saves your data in both the cold tier and the hot tier. The cold tier is a customer-managed Amazon S3 bucket.</p> </li> </ul>
     */
    storageType: PutStorageConfigurationRequestBodyStorageTypeEnum;
}
export declare class PutStorageConfigurationRequest extends SpeakeasyBase {
    requestBody: PutStorageConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutStorageConfigurationResponse extends SpeakeasyBase {
    /**
     * ConflictingOperationException
     */
    conflictingOperationException?: any;
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * Success
     */
    putStorageConfigurationResponse?: shared.PutStorageConfigurationResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
