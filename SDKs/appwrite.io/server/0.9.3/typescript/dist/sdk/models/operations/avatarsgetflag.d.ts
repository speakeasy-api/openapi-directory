import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AvatarsGetFlagSecurity extends SpeakeasyBase {
    jwt: string;
    key: string;
    project: string;
}
export declare class AvatarsGetFlagRequest extends SpeakeasyBase {
    /**
     * Country Code. ISO Alpha-2 country code format.
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
export declare class AvatarsGetFlagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
