import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * How long, in days, message data is kept.
 */
export declare class CreateDatasetRequestBodyRetentionPeriod extends SpeakeasyBase {
    numberOfDays?: number;
    unlimited?: boolean;
}
/**
 * Information about the versioning of dataset contents.
 */
export declare class CreateDatasetRequestBodyVersioningConfiguration extends SpeakeasyBase {
    maxVersions?: number;
    unlimited?: boolean;
}
export declare class CreateDatasetRequestBody extends SpeakeasyBase {
    /**
     * A list of actions that create the dataset contents.
     */
    actions: shared.DatasetAction[];
    /**
     * When dataset contents are created, they are delivered to destinations specified here.
     */
    contentDeliveryRules?: shared.DatasetContentDeliveryRule[];
    /**
     * The name of the dataset.
     */
    datasetName: string;
    /**
     * A list of data rules that send notifications to CloudWatch, when data arrives late. To specify <code>lateDataRules</code>, the dataset must use a <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html">DeltaTimer</a> filter.
     */
    lateDataRules?: shared.LateDataRule[];
    /**
     * How long, in days, message data is kept.
     */
    retentionPeriod?: CreateDatasetRequestBodyRetentionPeriod;
    /**
     * Metadata which can be used to manage the dataset.
     */
    tags?: shared.Tag[];
    /**
     * A list of triggers. A trigger causes dataset contents to be populated at a specified time interval or when another dataset's contents are created. The list of triggers can be empty or contain up to five <code>DataSetTrigger</code> objects.
     */
    triggers?: shared.DatasetTrigger[];
    /**
     * Information about the versioning of dataset contents.
     */
    versioningConfiguration?: CreateDatasetRequestBodyVersioningConfiguration;
}
export declare class CreateDatasetRequest extends SpeakeasyBase {
    requestBody: CreateDatasetRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateDatasetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createDatasetResponse?: shared.CreateDatasetResponse;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
