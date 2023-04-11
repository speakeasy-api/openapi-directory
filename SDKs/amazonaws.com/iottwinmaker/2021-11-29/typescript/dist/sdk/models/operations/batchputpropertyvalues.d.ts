import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchPutPropertyValuesRequestBody extends SpeakeasyBase {
    /**
     * An object that maps strings to the property value entries to set. Each string in the mapping must be unique to this object.
     */
    entries: shared.PropertyValueEntry[];
}
export declare class BatchPutPropertyValuesRequest extends SpeakeasyBase {
    requestBody: BatchPutPropertyValuesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the workspace that contains the properties to set.
     */
    workspaceId: string;
}
export declare class BatchPutPropertyValuesResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchPutPropertyValuesResponse?: shared.BatchPutPropertyValuesResponse;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
