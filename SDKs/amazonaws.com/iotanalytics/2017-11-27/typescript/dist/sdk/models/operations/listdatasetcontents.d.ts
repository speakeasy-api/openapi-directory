import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListDatasetContentsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the dataset whose contents information you want to list.
     */
    datasetName: string;
    /**
     * The maximum number of results to return in this request.
     */
    maxResults?: number;
    /**
     * The token for the next set of results.
     */
    nextToken?: string;
    /**
     * A filter to limit results to those dataset contents whose creation is scheduled before the given time. See the field <code>triggers.schedule</code> in the <code>CreateDataset</code> request. (timestamp)
     */
    scheduledBefore?: Date;
    /**
     * A filter to limit results to those dataset contents whose creation is scheduled on or after the given time. See the field <code>triggers.schedule</code> in the <code>CreateDataset</code> request. (timestamp)
     */
    scheduledOnOrAfter?: Date;
}
export declare class ListDatasetContentsResponse extends SpeakeasyBase {
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
     * Success
     */
    listDatasetContentsResponse?: shared.ListDatasetContentsResponse;
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
