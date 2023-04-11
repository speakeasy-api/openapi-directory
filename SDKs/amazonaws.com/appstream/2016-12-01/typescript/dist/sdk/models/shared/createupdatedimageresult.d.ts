import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
/**
 * Success
 */
export declare class CreateUpdatedImageResult extends SpeakeasyBase {
    canUpdateImage?: boolean;
    /**
     * Describes an image.
     */
    image?: Image;
}
