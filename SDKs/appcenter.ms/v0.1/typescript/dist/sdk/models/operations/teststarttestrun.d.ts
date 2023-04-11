import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TestStartTestRunSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * Options required to start the test run
 */
export declare class TestStartTestRunTestCloudStartTestRunOptions extends SpeakeasyBase {
    /**
     * Device selection string.
     */
    deviceSelection: string;
    /**
     * Language that should be used to run tests.
     */
    language?: string;
    /**
     * Locale that should be used to run tests.
     */
    locale?: string;
    /**
     * Test framework used by tests.
     */
    testFramework: string;
    /**
     * A JSON dictionary with additional test parameters
     */
    testParameters?: Record<string, any>;
    /**
     * Name of the test series.
     */
    testSeries?: string;
}
export declare class TestStartTestRunRequest extends SpeakeasyBase {
    /**
     * Option required to start the test run
     */
    requestBody: TestStartTestRunTestCloudStartTestRunOptions;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * The ID of the test run
     */
    testRunId: string;
}
/**
 * Result of starting a test run
 */
export declare class TestStartTestRunTestCloudTestRunStartResult extends SpeakeasyBase {
    /**
     * List with names of accepted devices
     */
    acceptedDevices?: string[];
    /**
     * List with names and descriptions of rejected devices
     */
    rejectedDevices?: string[];
}
export declare class TestStartTestRunResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    testCloudTestRunStartResult?: TestStartTestRunTestCloudTestRunStartResult;
}
