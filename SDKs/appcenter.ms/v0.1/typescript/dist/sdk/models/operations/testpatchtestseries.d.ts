import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TestPatchTestSeriesSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class TestPatchTestSeriesNameOfTheTestSeries extends SpeakeasyBase {
    /**
     * Name of the new test series
     */
    name: string;
}
export declare class TestPatchTestSeriesRequest extends SpeakeasyBase {
    requestBody: TestPatchTestSeriesNameOfTheTestSeries;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * The slug of the test series
     */
    testSeriesSlug: string;
}
/**
 * Most important information about a test run.
 */
export declare class TestPatchTestSeriesTestSeriesTestRunSummary extends SpeakeasyBase {
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
export declare class TestPatchTestSeriesTestSeries extends SpeakeasyBase {
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
    testRuns?: TestPatchTestSeriesTestSeriesTestRunSummary[];
}
export declare class TestPatchTestSeriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Test series was successfully patched
     */
    testSeries?: TestPatchTestSeriesTestSeries;
}
