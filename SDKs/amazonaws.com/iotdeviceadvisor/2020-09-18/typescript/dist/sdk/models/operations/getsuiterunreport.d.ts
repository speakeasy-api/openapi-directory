import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSuiteRunReportRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Suite definition ID of the test suite.
     */
    suiteDefinitionId: string;
    /**
     * Suite run ID of the test suite run.
     */
    suiteRunId: string;
}
export declare class GetSuiteRunReportResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getSuiteRunReportResponse?: shared.GetSuiteRunReportResponse;
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
