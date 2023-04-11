import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Gets suite run configuration.
 */
export declare class StartSuiteRunRequestBodySuiteRunConfiguration extends SpeakeasyBase {
    parallelRun?: boolean;
    primaryDevice?: shared.DeviceUnderTest;
    selectedTestList?: string[];
}
export declare class StartSuiteRunRequestBody extends SpeakeasyBase {
    /**
     * Suite definition version of the test suite.
     */
    suiteDefinitionVersion?: string;
    /**
     * Gets suite run configuration.
     */
    suiteRunConfiguration: StartSuiteRunRequestBodySuiteRunConfiguration;
    /**
     * The tags to be attached to the suite run.
     */
    tags?: Record<string, string>;
}
export declare class StartSuiteRunRequest extends SpeakeasyBase {
    requestBody: StartSuiteRunRequestBody;
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
}
export declare class StartSuiteRunResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    startSuiteRunResponse?: shared.StartSuiteRunResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
