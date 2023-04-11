import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserExtensionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    extensions?: shared.Extension[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
