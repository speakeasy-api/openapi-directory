import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TestGetTestRunStateSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class TestGetTestRunStateRequest extends SpeakeasyBase {
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
 * Current status of a test run
 */
export declare class TestGetTestRunStateTestRunState extends SpeakeasyBase {
    /**
     * The exit code that the client should use when exiting. Used for indicating status to the caller of the client.
     *
     * @remarks
     * 0: test run completes with no failing tests
     * 1: test run completes with at least one failing test
     * 2: test run failed to complete. Status for test run is unknown
     *
     */
    exitCode?: number;
    /**
     * Multi-line message that describes the status
     */
    message?: string[];
    /**
     * Time (in seconds) that the client should wait for before checking the status again
     */
    waitTime?: number;
}
export declare class TestGetTestRunStateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    testRunState?: TestGetTestRunStateTestRunState;
}
