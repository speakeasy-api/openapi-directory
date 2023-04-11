import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AvatarsGetBrowserSecurity extends SpeakeasyBase {
    jwt: string;
    project: string;
}
export declare class AvatarsGetBrowserRequest extends SpeakeasyBase {
    /**
     * Browser Code.
     */
    code: string;
    /**
     * Image height. Pass an integer between 0 to 2000. Defaults to 100.
     */
    height?: number;
    /**
     * Image quality. Pass an integer between 0 to 100. Defaults to 100.
     */
    quality?: number;
    /**
     * Image width. Pass an integer between 0 to 2000. Defaults to 100.
     */
    width?: number;
}
export declare class AvatarsGetBrowserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
