import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSuiteRunRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Suite definition ID for the test suite run.
     */
    suiteDefinitionId: string;
    /**
     * Suite run ID for the test suite run.
     */
    suiteRunId: string;
}
export declare class GetSuiteRunResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getSuiteRunResponse?: shared.GetSuiteRunResponse;
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
