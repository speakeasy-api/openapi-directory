import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TestCreateTestSeriesSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class TestCreateTestSeriesNameOfTheTestSeries extends SpeakeasyBase {
    /**
     * Name of the new test series
     */
    name: string;
}
export declare class TestCreateTestSeriesRequest extends SpeakeasyBase {
    requestBody: TestCreateTestSeriesNameOfTheTestSeries;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
/**
 * Details of a failed operation
 */
export declare class TestCreateTestSeriesTestCloudErrorDetails extends SpeakeasyBase {
    /**
     * Human-readable message that describes the error
     */
    message: string;
    /**
     * Status of the operation
     */
    status: string;
}
/**
 * Most important information about a test run.
 */
export declare class TestCreateTestSeriesTestSeriesTestRunSummary extends SpeakeasyBase {
    /**
     * Tells whether the test run has completed
     */
    completed?: boolean;
    /**
     * Date of the test run.
     */
    date?: string;
    /**
     * Number of failed tests
     */
    failed?: number;
    /**
     * Number of passed tests
     */
    passed?: number;
    /**
     * Human-readable status of the test run.
     */
    statusDescription?: string;
}
/**
 * Summary of a single test series
 */
export declare class TestCreateTestSeriesTestSeries extends SpeakeasyBase {
    /**
     * Date of the latest test run that used this test series
     */
    mostRecentActivity?: string;
    /**
     * Name of the test series
     */
    name: string;
    /**
     * Unique, human-readable identifier of the test series
     */
    slug: string;
    /**
     * Most recent test runs
     */
    testRuns?: TestCreateTestSeriesTestSeriesTestRunSummary[];
}
export declare class TestCreateTestSeriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid test series name
     */
    testCloudErrorDetails?: TestCreateTestSeriesTestCloudErrorDetails;
    /**
     * OK
     */
    testSeries?: TestCreateTestSeriesTestSeries;
}
