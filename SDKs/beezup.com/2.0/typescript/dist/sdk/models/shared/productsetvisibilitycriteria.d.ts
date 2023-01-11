import { SpeakeasyBase } from "../../../internal/utils";
import { ProductSetVisibilityCriteriaLogicTypeEnum } from "./productsetvisibilitycriterialogictypeenum";
export declare class ProductSetVisibilityCriteria extends SpeakeasyBase {
    disabled?: boolean;
    excluded?: boolean;
    exist?: boolean;
    logic: ProductSetVisibilityCriteriaLogicTypeEnum;
    uncategorized?: boolean;
}
