import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostMediaSecurity extends SpeakeasyBase {
    oauth: string;
}
export declare class PostMediaResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Media created
     */
    media?: shared.Media;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
