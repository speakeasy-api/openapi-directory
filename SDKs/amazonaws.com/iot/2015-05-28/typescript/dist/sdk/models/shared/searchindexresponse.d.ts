import { SpeakeasyBase } from "../../../internal/utils";
import { ThingDocument } from "./thingdocument";
import { ThingGroupDocument } from "./thinggroupdocument";
/**
 * Success
 */
export declare class SearchIndexResponse extends SpeakeasyBase {
    nextToken?: string;
    thingGroups?: ThingGroupDocument[];
    things?: ThingDocument[];
}
