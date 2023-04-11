import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetChannelsRequest extends SpeakeasyBase {
    /**
     * The language for any applicable localised strings.
     */
    lang: shared.LangEnum;
    /**
     * The region to get the channels for.
     */
    region?: string;
}
export declare class GetChannelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Default response
     */
    ibl?: any;
}
