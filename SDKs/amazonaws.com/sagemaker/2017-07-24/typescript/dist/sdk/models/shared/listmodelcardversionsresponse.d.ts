import { SpeakeasyBase } from "../../../internal/utils";
import { ModelCardVersionSummary } from "./modelcardversionsummary";
/**
 * Success
 */
export declare class ListModelCardVersionsResponse extends SpeakeasyBase {
    modelCardVersionSummaryList: ModelCardVersionSummary[];
    nextToken?: string;
}
