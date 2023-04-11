/**
 * CPC means cost per click.
 *
 * @remarks
 * CPA means cost per action.
 * You can have CPC/CPA with a global cost value.
 * You can have CPC/CPA by category the cost value MUST be null
 * You can have global fixed price.
 *
 */
export declare enum CostTypeEnum {
    CPCGlobal = "CPC_Global",
    CPAGlobal = "CPA_Global",
    CPCByCategory = "CPC_ByCategory",
    CPAByCategory = "CPA_ByCategory",
    FixedGlobal = "Fixed_Global"
}
