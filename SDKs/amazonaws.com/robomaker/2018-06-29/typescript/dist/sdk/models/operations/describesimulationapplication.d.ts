import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeSimulationApplicationRequestBody extends SpeakeasyBase {
    /**
     * The application information for the simulation application.
     */
    application: string;
    /**
     * The version of the simulation application to describe.
     */
    applicationVersion?: string;
}
export declare class DescribeSimulationApplicationRequest extends SpeakeasyBase {
    requestBody: DescribeSimulationApplicationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeSimulationApplicationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeSimulationApplicationResponse?: shared.DescribeSimulationApplicationResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
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
}
