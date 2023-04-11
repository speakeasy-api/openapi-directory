import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SetLogConfigurationRequest extends SpeakeasyBase {
    /**
     * The new logger configuration.
     */
    logConfiguration: shared.LogConfiguration;
    /**
     * The name of a single logger.
     */
    logger: string;
}
export declare class SetLogConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Common response for all operations that can fail with an unexpected server error.
     */
    error?: shared.ErrorT;
    /**
     * The new configuration for the given logger.
     */
    namedLogConfiguration?: shared.NamedLogConfiguration;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
