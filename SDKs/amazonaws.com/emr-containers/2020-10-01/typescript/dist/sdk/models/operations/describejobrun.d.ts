import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeJobRunRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the job run request.
     */
    jobRunId: string;
    /**
     * The ID of the virtual cluster for which the job run is submitted.
     */
    virtualClusterId: string;
}
export declare class DescribeJobRunResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeJobRunResponse?: shared.DescribeJobRunResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
