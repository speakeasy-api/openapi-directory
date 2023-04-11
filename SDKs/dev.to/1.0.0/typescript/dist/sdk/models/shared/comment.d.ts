import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Comment on an Article or Podcast Episode
 */
export declare class Comment extends SpeakeasyBase {
    createdAt?: Date;
    idCode?: string;
    /**
     * Podcast image url
     */
    imageUrl?: string;
    typeOf?: string;
}
