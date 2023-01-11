import { SpeakeasyBase } from "../../../internal/utils";
import { CompareOptionsEnum } from "./compareoptionsenum";
import { DuplicateProductValueStrategyEnum } from "./duplicateproductvaluestrategyenum";
/**
 * Describe how you want to manage the duplication of the product value
**/
export declare class DuplicateProductValueConfiguration extends SpeakeasyBase {
    compareOptions: CompareOptionsEnum;
    strategy: DuplicateProductValueStrategyEnum;
}
