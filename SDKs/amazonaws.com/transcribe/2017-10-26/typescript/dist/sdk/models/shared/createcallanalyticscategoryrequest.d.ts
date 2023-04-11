import { SpeakeasyBase } from "../../../internal/utils";
import { InputTypeEnum } from "./inputtypeenum";
import { Rule } from "./rule";
export declare class CreateCallAnalyticsCategoryRequest extends SpeakeasyBase {
    categoryName: string;
    inputType?: InputTypeEnum;
    rules: Rule[];
}
