import { SpeakeasyBase } from "../../../internal/utils";
import { Page } from "./page";
/**
 * Success
 */
export declare class ListPagesByContactResult extends SpeakeasyBase {
    nextToken?: string;
    pages: Page[];
}
