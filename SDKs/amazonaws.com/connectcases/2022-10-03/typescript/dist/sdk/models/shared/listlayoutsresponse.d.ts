import { SpeakeasyBase } from "../../../internal/utils";
import { LayoutSummary } from "./layoutsummary";
/**
 * Success
 */
export declare class ListLayoutsResponse extends SpeakeasyBase {
    layouts: LayoutSummary[];
    nextToken?: string;
}
