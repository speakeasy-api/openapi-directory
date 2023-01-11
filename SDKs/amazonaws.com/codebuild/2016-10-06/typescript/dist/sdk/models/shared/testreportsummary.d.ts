import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Information about a test report.
**/
export declare class TestReportSummary extends SpeakeasyBase {
    durationInNanoSeconds: number;
    statusCounts: Record<string, number>;
    total: number;
}
