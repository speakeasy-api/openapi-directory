import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TestGetTestRunSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class TestGetTestRunRequest extends SpeakeasyBase {
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
 * Summary single test run on Xamarin Test Cloud
 */
export declare class TestGetTestRunTestRunTestRunStatistics extends SpeakeasyBase {
    /**
     * Number of devices running the test
     */
    devices?: number;
    /**
     * Number of failed devices
     */
    devicesFailed?: number;
    /**
     * Number of finished devices
     */
    devicesFinished?: number;
    /**
     * Number of failed tests
     */
    failed?: number;
    /**
     * Number of passed tests
     */
    passed?: number;
    /**
     * The max amount of MB used during the test run
     */
    peakMemory?: number;
    /**
     * Number of skipped tests
     */
    skipped?: number;
    /**
     * Number of tests in total
     */
    total?: number;
    /**
     * The number of minutes of device time the test has been runnign
     */
    totalDeviceMinutes?: number;
}
/**
 * Summary single test run on Xamarin Test Cloud
 */
export declare class TestGetTestRunTestRun extends SpeakeasyBase {
    /**
     * The compiled version of the app binary
     */
    appVersion?: string;
    /**
     * The date and time the test was uploaded
     */
    date?: string;
    /**
     * Human readable explanation of the current test status
     */
    description?: string;
    /**
     * The unique id of the test upload
     */
    id?: string;
    /**
     * The device platform targeted by the test. Possible values are 'ios' or 'android'
     */
    platform?: string;
    /**
     * The passed/failed state
     */
    resultStatus?: string;
    /**
     * The current status of the test run, in relation to the various phases
     */
    runStatus?: string;
    /**
     * Deprecated. Use runStatus instead.
     */
    state?: string;
    /**
     * Summary single test run on Xamarin Test Cloud
     */
    stats?: TestGetTestRunTestRunTestRunStatistics;
    /**
     * Deprecated. Use resultStatus instead.
     */
    status?: string;
    /**
     * The name of the test series with which this test upload is associated
     */
    testSeries?: string;
    /**
     * The name of the test framework used to run this test
     */
    testType?: string;
}
export declare class TestGetTestRunResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    testRun?: TestGetTestRunTestRun;
}
