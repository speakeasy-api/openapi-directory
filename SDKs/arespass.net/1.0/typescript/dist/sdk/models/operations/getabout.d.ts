import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAboutRequest extends SpeakeasyBase {
    /**
     * **The format of the returned metadata.**
     *
     * @remarks
     *
     * Allowed values are *json*, *xml* and *yaml*.
     *
     * The default value is *xml*.
     *
     */
    outputFormat?: string;
}
export declare class GetAboutResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **The metadata about this API&#58; version number, release date and available languages.**
     *
     * @remarks
     *
     */
    about?: shared.About;
}
