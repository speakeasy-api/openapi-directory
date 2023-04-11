import { SpeakeasyBase } from "../../../internal/utils";
import { TagSet } from "./tagset";
/**
 * Tag created
 */
export declare class Tag extends SpeakeasyBase {
    /**
     * Optional HTML hexcode colour
     */
    colour?: string;
    id: string;
    name: string;
    tagSet?: TagSet;
    urlWords?: string;
}
