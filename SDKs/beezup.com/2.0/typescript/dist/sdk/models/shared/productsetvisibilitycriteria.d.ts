import { SpeakeasyBase } from "../../../internal/utils";
import { ProductSetVisibilityCriteriaLogicTypeEnum } from "./productsetvisibilitycriterialogictypeenum";
export declare class ProductSetVisibilityCriteria extends SpeakeasyBase {
    /**
     * Search disabled products. If null the filter will not be taken in account.
     */
    disabled?: boolean;
    /**
     * Search excluded products by at least an exclusion filter. If null the filter will not be taken in account.
     */
    excluded?: boolean;
    /**
     * If false, search for products absent from the current catalog. If true, search for products currently in the catalog. If null the filter will not be taken in account.
     */
    exist?: boolean;
    /**
     * Indicate how you want to combine the filters:
     *
     * @remarks
     * * funnel: You will get the products which meet at least one of the product set criterion. The criteria are applied in the following order:
     *   - categorization
     *   - exclusion filters
     *   - deactivations
     * * cumulative: You will get the products which have all the product set criteria
     *
     */
    logic: ProductSetVisibilityCriteriaLogicTypeEnum;
    /**
     * Search product WITHOUT category mapped with the channel. If null the filter will not be taken in account.
     */
    uncategorized?: boolean;
}
