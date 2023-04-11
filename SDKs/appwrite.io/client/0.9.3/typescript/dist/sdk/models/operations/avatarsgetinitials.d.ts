import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AvatarsGetInitialsSecurity extends SpeakeasyBase {
    jwt: string;
    project: string;
}
export declare class AvatarsGetInitialsRequest extends SpeakeasyBase {
    /**
     * Changes background color. By default a random color will be picked and stay will persistent to the given name.
     */
    background?: string;
    /**
     * Changes text color. By default a random color will be picked and stay will persistent to the given name.
     */
    color?: string;
    /**
     * Image height. Pass an integer between 0 to 2000. Defaults to 100.
     */
    height?: number;
    /**
     * Full Name. When empty, current user name or email will be used. Max length: 128 chars.
     */
    name?: string;
    /**
     * Image width. Pass an integer between 0 to 2000. Defaults to 100.
     */
    width?: number;
}
export declare class AvatarsGetInitialsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
