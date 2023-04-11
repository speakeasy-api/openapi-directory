import { SpeakeasyBase } from "../../../internal/utils";
/**
 * successful operation
 */
export declare class KeywordSearchResponse extends SpeakeasyBase {
    domainCode?: string;
    foundProducts?: string[];
    keyword?: string;
    numberOfProducts?: number;
    responseMessage?: string;
    responseStatus?: string;
    sortStrategy?: string;
}
