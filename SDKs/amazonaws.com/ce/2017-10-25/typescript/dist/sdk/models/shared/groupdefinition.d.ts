import { SpeakeasyBase } from "../../../internal/utils";
import { GroupDefinitionTypeEnum } from "./groupdefinitiontypeenum";
/**
 * Represents a group when you specify a group by criteria or in the response to a query with a specific grouping.
 */
export declare class GroupDefinition extends SpeakeasyBase {
    key?: string;
    type?: GroupDefinitionTypeEnum;
}
