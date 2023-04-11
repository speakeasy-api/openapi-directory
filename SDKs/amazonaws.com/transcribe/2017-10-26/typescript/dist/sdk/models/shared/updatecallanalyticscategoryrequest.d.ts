import { SpeakeasyBase } from "../../../internal/utils";
import { InputTypeEnum } from "./inputtypeenum";
import { Rule } from "./rule";
export declare class UpdateCallAnalyticsCategoryRequest extends SpeakeasyBase {
    categoryName: string;
    inputType?: InputTypeEnum;
    rules: Rule[];
}
