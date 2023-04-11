import { SpeakeasyBase } from "../../../internal/utils";
import { SpaceSummary } from "./spacesummary";
/**
 * Success
 */
export declare class ListSpacesResponse extends SpeakeasyBase {
    items?: SpaceSummary[];
    nextToken?: string;
}
