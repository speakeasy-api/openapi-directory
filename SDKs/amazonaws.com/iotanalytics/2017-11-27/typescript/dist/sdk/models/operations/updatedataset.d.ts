import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * How long, in days, message data is kept.
 */
export declare class UpdateDatasetRequestBodyRetentionPeriod extends SpeakeasyBase {
    numberOfDays?: number;
    unlimited?: boolean;
}
/**
 * Information about the versioning of dataset contents.
 */
export declare class UpdateDatasetRequestBodyVersioningConfiguration extends SpeakeasyBase {
    maxVersions?: number;
    unlimited?: boolean;
}
export declare class UpdateDatasetRequestBody extends SpeakeasyBase {
    /**
     * A list of <code>DatasetAction</code> objects.
     */
    actions: shared.DatasetAction[];
    /**
     * When dataset contents are created, they are delivered to destinations specified here.
     */
    contentDeliveryRules?: shared.DatasetContentDeliveryRule[];
    /**
     * A list of data rules that send notifications to CloudWatch, when data arrives late. To specify <code>lateDataRules</code>, the dataset must use a <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html">DeltaTimer</a> filter.
     */
    lateDataRules?: shared.LateDataRule[];
    /**
     * How long, in days, message data is kept.
     */
    retentionPeriod?: UpdateDatasetRequestBodyRetentionPeriod;
    /**
     * A list of <code>DatasetTrigger</code> objects. The list can be empty or can contain up to five <code>DatasetTrigger</code> objects.
     */
    triggers?: shared.DatasetTrigger[];
    /**
     * Information about the versioning of dataset contents.
     */
    versioningConfiguration?: UpdateDatasetRequestBodyVersioningConfiguration;
}
export declare class UpdateDatasetRequest extends SpeakeasyBase {
    requestBody: UpdateDatasetRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the dataset to update.
     */
    datasetName: string;
}
export declare class UpdateDatasetResponse extends SpeakeasyBase {
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
