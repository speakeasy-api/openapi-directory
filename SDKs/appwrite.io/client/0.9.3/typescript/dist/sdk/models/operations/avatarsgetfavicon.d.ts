import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AvatarsGetFaviconSecurity extends SpeakeasyBase {
    jwt: string;
    project: string;
}
export declare class AvatarsGetFaviconRequest extends SpeakeasyBase {
    /**
     * Website URL which you want to fetch the favicon from.
     */
    url: string;
}
export declare class AvatarsGetFaviconResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
