import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostConfigApacheSlingGetServletRequest extends SpeakeasyBase {
    enableHtml?: boolean;
    enableHtmlAtTypeHint?: string;
    enableTxt?: boolean;
    enableTxtAtTypeHint?: string;
    enableXml?: boolean;
    enableXmlAtTypeHint?: string;
    jsonMaximumresults?: string;
    jsonMaximumresultsAtTypeHint?: string;
}
export declare class PostConfigApacheSlingGetServletResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
