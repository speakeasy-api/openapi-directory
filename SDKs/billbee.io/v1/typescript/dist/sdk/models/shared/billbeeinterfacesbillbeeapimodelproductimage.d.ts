import { SpeakeasyBase } from "../../../internal/utils";
export declare class BillbeeInterfacesBillbeeAPIModelProductImage extends SpeakeasyBase {
    /**
     * The id of this image from the original system
     */
    externalId?: string;
    /**
     * True if the image is / should be the default image
     */
    isDefaultImage?: boolean;
    /**
     * The order of this image
     */
    position?: number;
    /**
     * The url to the image
     */
    url?: string;
}
