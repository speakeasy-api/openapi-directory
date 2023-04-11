import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Each query contains the question you want to ask in the Text and the alias you want to associate.
 */
export declare class Query extends SpeakeasyBase {
    alias?: string;
    pages?: string[];
    text: string;
}
