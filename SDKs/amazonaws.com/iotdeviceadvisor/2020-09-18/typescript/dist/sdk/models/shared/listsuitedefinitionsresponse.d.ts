import { SpeakeasyBase } from "../../../internal/utils";
import { SuiteDefinitionInformation } from "./suitedefinitioninformation";
/**
 * Success
 */
export declare class ListSuiteDefinitionsResponse extends SpeakeasyBase {
    nextToken?: string;
    suiteDefinitionInformationList?: SuiteDefinitionInformation[];
}
