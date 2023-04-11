import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StorageGetFilePreviewSecurity extends SpeakeasyBase {
    jwt: string;
    project: string;
}
export declare class StorageGetFilePreviewRequest extends SpeakeasyBase {
    /**
     * Preview image background color. Only works with transparent images (png). Use a valid HEX color, no # is needed for prefix.
     */
    background?: string;
    /**
     * Preview image border color. Use a valid HEX color, no # is needed for prefix.
     */
    borderColor?: string;
    /**
     * Preview image border radius in pixels. Pass an integer between 0 to 4000.
     */
    borderRadius?: number;
    /**
     * Preview image border in pixels. Pass an integer between 0 to 100. Defaults to 0.
     */
    borderWidth?: number;
    /**
     * File unique ID
     */
    fileId: string;
    /**
     * Image crop gravity. Can be one of center,top-left,top,top-right,left,right,bottom-left,bottom,bottom-right
     */
    gravity?: string;
    /**
     * Resize preview image height, Pass an integer between 0 to 4000.
     */
    height?: number;
    /**
     * Preview image opacity. Only works with images having an alpha channel (like png). Pass a number between 0 to 1.
     */
    opacity?: number;
    /**
     * Output format type (jpeg, jpg, png, gif and webp).
     */
    output?: string;
    /**
     * Preview image quality. Pass an integer between 0 to 100. Defaults to 100.
     */
    quality?: number;
    /**
     * Preview image rotation in degrees. Pass an integer between 0 and 360.
     */
    rotation?: number;
    /**
     * Resize preview image width, Pass an integer between 0 to 4000.
     */
    width?: number;
}
export declare class StorageGetFilePreviewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
