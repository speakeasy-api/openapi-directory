import { SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";
import { TestCaseScenario } from "./testcasescenario";
/**
 * Provides the test case run.
 */
export declare class TestCaseRun extends SpeakeasyBase {
    endTime?: Date;
    failure?: string;
    logUrl?: string;
    startTime?: Date;
    status?: StatusEnum;
    testCaseDefinitionId?: string;
    testCaseDefinitionName?: string;
    testCaseRunId?: string;
    testScenarios?: TestCaseScenario[];
    warnings?: string;
}
