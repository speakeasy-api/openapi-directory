import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created.
 */
export declare class UpdateDatastoreRequestBodyDatastoreStorage extends SpeakeasyBase {
    customerManagedS3?: shared.CustomerManagedDatastoreS3Storage;
    iotSiteWiseMultiLayerStorage?: shared.DatastoreIotSiteWiseMultiLayerStorage;
    serviceManagedS3?: Record<string, any>;
}
/**
 * <p>Contains the configuration information of file formats. IoT Analytics data stores support JSON and <a href="https://parquet.apache.org/">Parquet</a>.</p> <p>The default file format is JSON. You can specify only one format.</p> <p>You can't change the file format after you create the data store.</p>
 */
export declare class UpdateDatastoreRequestBodyFileFormatConfiguration extends SpeakeasyBase {
    jsonConfiguration?: Record<string, any>;
    parquetConfiguration?: shared.ParquetConfiguration;
}
/**
 * How long, in days, message data is kept.
 */
export declare class UpdateDatastoreRequestBodyRetentionPeriod extends SpeakeasyBase {
    numberOfDays?: number;
    unlimited?: boolean;
}
export declare class UpdateDatastoreRequestBody extends SpeakeasyBase {
    /**
     * Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created.
     */
    datastoreStorage?: UpdateDatastoreRequestBodyDatastoreStorage;
    /**
     * <p>Contains the configuration information of file formats. IoT Analytics data stores support JSON and <a href="https://parquet.apache.org/">Parquet</a>.</p> <p>The default file format is JSON. You can specify only one format.</p> <p>You can't change the file format after you create the data store.</p>
     */
    fileFormatConfiguration?: UpdateDatastoreRequestBodyFileFormatConfiguration;
    /**
     * How long, in days, message data is kept.
     */
    retentionPeriod?: UpdateDatastoreRequestBodyRetentionPeriod;
}
export declare class UpdateDatastoreRequest extends SpeakeasyBase {
    requestBody: UpdateDatastoreRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the data store to be updated.
     */
    datastoreName: string;
}
export declare class UpdateDatastoreResponse extends SpeakeasyBase {
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
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
}
