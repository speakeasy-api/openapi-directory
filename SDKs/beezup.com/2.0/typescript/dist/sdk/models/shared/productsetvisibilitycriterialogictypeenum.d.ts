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
export declare enum ProductSetVisibilityCriteriaLogicTypeEnum {
    Funnel = "funnel",
    Cumulative = "cumulative"
}
