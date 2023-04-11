import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListConfigPropertiesResponse extends SpeakeasyBase {
    /**
     * On a successful response, returns a list of configuration properties.
     */
    configurationProperties?: shared.ConfigurationProperty[];
    contentType: string;
    /**
     * Common response for all operations that can fail with an unexpected server error.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
