import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSwatchRequest extends SpeakeasyBase {
    /**
     * The hex value of the color to retrieve without '#'
     */
    color: string;
    /**
     * The name of the color
     */
    name?: string;
}
export declare class GetSwatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * NOT FOUND
     */
    error?: shared.ErrorT;
    /**
     * OK
     */
    getSwatch200ImageSvgPlusXmlString?: string;
}
