import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSetPasswordRequest extends SpeakeasyBase {
    old: string;
    plain: string;
    verify: string;
}
export declare class PostSetPasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Default response
     */
    postSetPasswordDefaultTextPlainString?: string;
}
