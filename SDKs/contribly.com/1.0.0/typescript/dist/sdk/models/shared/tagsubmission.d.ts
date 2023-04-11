import { SpeakeasyBase } from "../../../internal/utils";
import { TagSet } from "./tagset";
/**
 * Tag object to be created
 */
export declare class TagSubmission extends SpeakeasyBase {
    colour?: string;
    name: string;
    tagSet?: TagSet;
    urlWords?: string;
}
