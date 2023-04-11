import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateRecordsRequestBody extends SpeakeasyBase {
    /**
     * The unique ID generated for this device by Cognito.
     */
    deviceId?: string;
    /**
     * A list of patch operations.
     */
    recordPatches?: shared.RecordPatch[];
    /**
     * The SyncSessionToken returned by a previous call to ListRecords for this dataset and identity.
     */
    syncSessionToken: string;
}
export declare class UpdateRecordsRequest extends SpeakeasyBase {
    /**
     * A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).
     */
    datasetName: string;
    /**
     * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
     */
    identityId: string;
    /**
     * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
     */
    identityPoolId: string;
    requestBody: UpdateRecordsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Intended to supply a device ID that will populate the lastModifiedBy field referenced in other methods. The ClientContext field is not yet implemented.
     */
    xAmzClientContext?: string;
}
export declare class UpdateRecordsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidLambdaFunctionOutputException
     */
    invalidLambdaFunctionOutputException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * LambdaThrottledException
     */
    lambdaThrottledException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NotAuthorizedException
     */
    notAuthorizedException?: any;
    /**
     * ResourceConflictException
     */
    resourceConflictException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * Success
     */
    updateRecordsResponse?: shared.UpdateRecordsResponse;
}
