import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AvatarsGetImageSecurity extends SpeakeasyBase {
    jwt: string;
    project: string;
}
export declare class AvatarsGetImageRequest extends SpeakeasyBase {
    /**
     * Resize preview image height, Pass an integer between 0 to 2000.
     */
    height?: number;
    /**
     * Image URL which you want to crop.
     */
    url: string;
    /**
     * Resize preview image width, Pass an integer between 0 to 2000.
     */
    width?: number;
}
export declare class AvatarsGetImageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
