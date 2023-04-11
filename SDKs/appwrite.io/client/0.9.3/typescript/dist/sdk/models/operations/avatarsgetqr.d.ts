import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AvatarsGetQRSecurity extends SpeakeasyBase {
    jwt: string;
    project: string;
}
export declare class AvatarsGetQRRequest extends SpeakeasyBase {
    /**
     * Return resulting image with 'Content-Disposition: attachment ' headers for the browser to start downloading it. Pass 0 for no header, or 1 for otherwise. Default value is set to 0.
     */
    download?: boolean;
    /**
     * Margin from edge. Pass an integer between 0 to 10. Defaults to 1.
     */
    margin?: number;
    /**
     * QR code size. Pass an integer between 0 to 1000. Defaults to 400.
     */
    size?: number;
    /**
     * Plain text to be converted to QR code image.
     */
    text: string;
}
export declare class AvatarsGetQRResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
