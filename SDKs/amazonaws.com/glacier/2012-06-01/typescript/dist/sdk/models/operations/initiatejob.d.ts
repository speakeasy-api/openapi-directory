import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Provides options for defining a job.
 */
export declare class InitiateJobRequestBodyJobParameters extends SpeakeasyBase {
    archiveId?: string;
    description?: string;
    format?: string;
    inventoryRetrievalParameters?: shared.InventoryRetrievalJobInput;
    outputLocation?: shared.OutputLocation;
    retrievalByteRange?: string;
    snsTopic?: string;
    selectParameters?: shared.SelectParameters;
    tier?: string;
    type?: string;
}
export declare class InitiateJobRequestBody extends SpeakeasyBase {
    /**
     * Provides options for defining a job.
     */
    jobParameters?: InitiateJobRequestBodyJobParameters;
}
export declare class InitiateJobRequest extends SpeakeasyBase {
    requestBody: InitiateJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
     */
    accountId: string;
    /**
     * The name of the vault.
     */
    vaultName: string;
}
export declare class InitiateJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    initiateJobOutput?: Record<string, any>;
    /**
     * InsufficientCapacityException
     */
    insufficientCapacityException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * MissingParameterValueException
     */
    missingParameterValueException?: any;
    /**
     * PolicyEnforcedException
     */
    policyEnforcedException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
