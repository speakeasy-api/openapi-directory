import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TestGetAllTestSeriesSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class TestGetAllTestSeriesRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * A query string to filter test series
     */
    query?: string;
}
/**
 * Most important information about a test run.
 */
export declare class TestGetAllTestSeriesTestSeriesTestRunSummary extends SpeakeasyBase {
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
export declare class TestGetAllTestSeriesTestSeries extends SpeakeasyBase {
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
    testRuns?: TestGetAllTestSeriesTestSeriesTestRunSummary[];
}
export declare class TestGetAllTestSeriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    testSeries?: TestGetAllTestSeriesTestSeries[];
}
