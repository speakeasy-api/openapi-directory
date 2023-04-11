import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TestGetTestReportSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class TestGetTestReportRequest extends SpeakeasyBase {
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
export declare class TestGetTestReport200ApplicationJSONDeviceLogs extends SpeakeasyBase {
    appiumLog?: string;
    deviceLog?: string;
    deviceSnapshotId?: string;
    testLog?: string;
}
export declare class TestGetTestReport200ApplicationJSONFeaturesTestsRunsStepsStepExecutions extends SpeakeasyBase {
    deviceSnapshotId?: string;
    status?: string;
    timestamp?: number;
}
export declare class TestGetTestReport200ApplicationJSONFeaturesTestsRunsSteps extends SpeakeasyBase {
    failed?: number;
    id?: string;
    skipped?: number;
    stepExecutions?: TestGetTestReport200ApplicationJSONFeaturesTestsRunsStepsStepExecutions[];
    stepName?: string;
    stepReportUrl?: string;
}
export declare class TestGetTestReport200ApplicationJSONFeaturesTestsRuns extends SpeakeasyBase {
    failed?: number;
    id?: string;
    number?: number;
    reportUrl?: string;
    skipped?: number;
    steps?: TestGetTestReport200ApplicationJSONFeaturesTestsRunsSteps[];
}
export declare class TestGetTestReport200ApplicationJSONFeaturesTests extends SpeakeasyBase {
    peakDuration?: number;
    peakMemory?: number;
    runs?: TestGetTestReport200ApplicationJSONFeaturesTestsRuns[];
    testName?: string;
}
export declare class TestGetTestReport200ApplicationJSONFeatures extends SpeakeasyBase {
    failed?: number;
    name?: string;
    peakDuration?: number;
    peakMemory?: number;
    skipped?: number;
    tests?: TestGetTestReport200ApplicationJSONFeaturesTests[];
}
export declare class TestGetTestReport200ApplicationJSONSnapshotFatalErrors extends SpeakeasyBase {
    deviceSnapshotId?: string;
    errorMessage?: string;
    errorTitle?: string;
}
export declare class TestGetTestReport200ApplicationJSONStats extends SpeakeasyBase {
    artifacts?: Record<string, string>;
    devices: number;
    devicesFailed: number;
    devicesFinished: number;
    devicesNotRunned: number;
    devicesSkipped: number;
    failed: number;
    filesize: number;
    os: number;
    passed: number;
    skipped: number;
    stepCount: number;
    total: number;
    totalDeviceMinutes: number;
}
/**
 * OK
 */
export declare class TestGetTestReport200ApplicationJSON extends SpeakeasyBase {
    appUploadId: string;
    date: string;
    dateFinished: string;
    deviceLogs: TestGetTestReport200ApplicationJSONDeviceLogs[];
    errorMessage?: string;
    features: TestGetTestReport200ApplicationJSONFeatures[];
    finishedDeviceSnapshots: string[];
    id: string;
    platform: string;
    revision: number;
    schemaVersion: number;
    snapshotFatalErrors?: TestGetTestReport200ApplicationJSONSnapshotFatalErrors[];
    stats: TestGetTestReport200ApplicationJSONStats;
    testType: string;
}
export declare class TestGetTestReportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    testGetTestReport200ApplicationJSONObject?: TestGetTestReport200ApplicationJSON;
}
