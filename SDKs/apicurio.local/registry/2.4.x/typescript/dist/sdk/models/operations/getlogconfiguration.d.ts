import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLogConfigurationRequest extends SpeakeasyBase {
    /**
     * The name of a single logger.
     */
    logger: string;
}
export declare class GetLogConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Common response for all operations that can fail with an unexpected server error.
     */
    error?: shared.ErrorT;
    /**
     * The logger configuration for the named logger.
     */
    namedLogConfiguration?: shared.NamedLogConfiguration;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
