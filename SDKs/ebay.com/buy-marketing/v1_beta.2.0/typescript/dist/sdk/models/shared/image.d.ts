import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type the defines the details of an image, such as size and URL. Currently only <b> imageUrl</b> is getting populated. The <b> height</b> and <b> width</b> were added for future use.
 */
export declare class Image extends SpeakeasyBase {
    /**
     * <b> Reserved for future use. </b>
     */
    height?: number;
    /**
     * The URL of the image.
     */
    imageUrl?: string;
    /**
     * <b> Reserved for future use. </b>
     */
    width?: number;
}
