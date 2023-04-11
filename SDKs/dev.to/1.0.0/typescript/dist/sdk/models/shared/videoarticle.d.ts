import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Author of the article
 */
export declare class VideoArticleUser extends SpeakeasyBase {
    name?: string;
}
/**
 * Representation of an Article with video
 */
export declare class VideoArticle extends SpeakeasyBase {
    cloudinaryVideoUrl?: string;
    id?: number;
    path?: string;
    title?: string;
    typeOf?: string;
    /**
     * Author of the article
     */
    user?: VideoArticleUser;
    userId?: number;
    videoDurationInMinutes?: string;
    videoSourceUrl?: string;
}
