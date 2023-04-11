import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListJobsByPipelineRequest extends SpeakeasyBase {
    /**
     *  To list jobs in chronological order by the date and time that they were submitted, enter <code>true</code>. To list jobs in reverse chronological order, enter <code>false</code>.
     */
    ascending?: string;
    /**
     *  When Elastic Transcoder returns more than one page of results, use <code>pageToken</code> in subsequent <code>GET</code> requests to get each successive page of results.
     */
    pageToken?: string;
    /**
     * The ID of the pipeline for which you want to get job information.
     */
    pipelineId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListJobsByPipelineResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * IncompatibleVersionException
     */
    incompatibleVersionException?: any;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * Success
     */
    listJobsByPipelineResponse?: shared.ListJobsByPipelineResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
