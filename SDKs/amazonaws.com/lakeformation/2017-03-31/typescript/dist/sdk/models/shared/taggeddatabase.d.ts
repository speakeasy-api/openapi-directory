import { SpeakeasyBase } from "../../../internal/utils";
import { DatabaseResource } from "./databaseresource";
import { LFTagPair } from "./lftagpair";
/**
 * A structure describing a database resource with LF-tags.
 */
export declare class TaggedDatabase extends SpeakeasyBase {
    database?: DatabaseResource;
    lfTags?: LFTagPair[];
}
