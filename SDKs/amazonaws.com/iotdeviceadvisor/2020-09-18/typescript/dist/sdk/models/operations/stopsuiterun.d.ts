import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StopSuiteRunRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Suite definition ID of the test suite run to be stopped.
     */
    suiteDefinitionId: string;
    /**
     * Suite run ID of the test suite run to be stopped.
     */
    suiteRunId: string;
}
export declare class StopSuiteRunResponse extends SpeakeasyBase {
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
     * Success
     */
    stopSuiteRunResponse?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
