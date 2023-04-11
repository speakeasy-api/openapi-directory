import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListLogConfigurationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Common response for all operations that can fail with an unexpected server error.
     */
    error?: shared.ErrorT;
    /**
     * The list of logging configurations.
     */
    namedLogConfigurations?: shared.NamedLogConfiguration[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
