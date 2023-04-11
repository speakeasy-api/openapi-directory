import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information on a promotion. A promotion defines additional business rules that apply to a configurable subset of recommended items.
 */
export declare class Promotion extends SpeakeasyBase {
    filterArn?: string;
    filterValues?: Record<string, string>;
    name?: string;
    percentPromotedItems?: number;
}
