import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Does the error apply to one item
 */
export declare enum DetailScopeEnum {
    Parameter = "Parameter",
    Report = "Report",
    Item = "Item"
}
export declare class Detail extends SpeakeasyBase {
    /**
     * The details of the error
     */
    detail?: string;
    /**
     * Depends on scope, either the item's id (message_id) or the report's id
     */
    id?: string;
    /**
     * Does the error apply to one item
     */
    scope?: DetailScopeEnum;
}
