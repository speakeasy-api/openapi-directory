import { SpeakeasyBase } from "../../../internal/utils";
import { RefResource } from "./refresource";
/**
 * Success
 */
export declare class ListSegmentReferencesResponse extends SpeakeasyBase {
    nextToken?: string;
    referencedBy?: RefResource[];
}
