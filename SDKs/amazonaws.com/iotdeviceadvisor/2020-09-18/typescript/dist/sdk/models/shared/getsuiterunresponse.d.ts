import { SpeakeasyBase } from "../../../internal/utils";
import { SuiteRunConfiguration } from "./suiterunconfiguration";
import { SuiteRunStatusEnum } from "./suiterunstatusenum";
import { TestResult } from "./testresult";
/**
 * Success
 */
export declare class GetSuiteRunResponse extends SpeakeasyBase {
    endTime?: Date;
    errorReason?: string;
    startTime?: Date;
    status?: SuiteRunStatusEnum;
    suiteDefinitionId?: string;
    suiteDefinitionVersion?: string;
    suiteRunArn?: string;
    suiteRunConfiguration?: SuiteRunConfiguration;
    suiteRunId?: string;
    tags?: Record<string, string>;
    testResult?: TestResult;
}
