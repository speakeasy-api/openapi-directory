import { SpeakeasyBase } from "../../../internal/utils";
import { ReferenceListItem } from "./referencelistitem";
/**
 * Success
 */
export declare class ListReferencesResponse extends SpeakeasyBase {
    nextToken?: string;
    references: ReferenceListItem[];
}
