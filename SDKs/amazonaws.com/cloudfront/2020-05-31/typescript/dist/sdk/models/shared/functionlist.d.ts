import { SpeakeasyBase } from "../../../internal/utils";
import { FunctionSummaryList } from "./functionsummarylist";
/**
 * A list of CloudFront functions.
 */
export declare class FunctionList extends SpeakeasyBase {
    items?: FunctionSummaryList[];
    maxItems: number;
    nextMarker?: string;
    quantity: number;
}
