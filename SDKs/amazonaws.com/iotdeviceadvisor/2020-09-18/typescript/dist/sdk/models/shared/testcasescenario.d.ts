import { SpeakeasyBase } from "../../../internal/utils";
import { TestCaseScenarioStatusEnum } from "./testcasescenariostatusenum";
import { TestCaseScenarioTypeEnum } from "./testcasescenariotypeenum";
/**
 * Provides test case scenario.
 */
export declare class TestCaseScenario extends SpeakeasyBase {
    failure?: string;
    status?: TestCaseScenarioStatusEnum;
    systemMessage?: string;
    testCaseScenarioId?: string;
    testCaseScenarioType?: TestCaseScenarioTypeEnum;
}
