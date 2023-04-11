import { SpeakeasyBase } from "../../../internal/utils";
import { InputTypeEnum } from "./inputtypeenum";
import { Rule } from "./rule";
/**
 * Provides you with the properties of the Call Analytics category you specified in your request. This includes the list of rules that define the specified category.
 */
export declare class CategoryProperties extends SpeakeasyBase {
    categoryName?: string;
    createTime?: Date;
    inputType?: InputTypeEnum;
    lastUpdateTime?: Date;
    rules?: Rule[];
}
