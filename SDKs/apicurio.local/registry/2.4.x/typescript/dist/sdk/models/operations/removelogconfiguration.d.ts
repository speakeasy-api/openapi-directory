import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RemoveLogConfigurationRequest extends SpeakeasyBase {
    /**
     * The name of a single logger.
     */
    logger: string;
}
export declare class RemoveLogConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Common response for all operations that can fail with an unexpected server error.
     */
    error?: shared.ErrorT;
    /**
     * The default logger configuration (now that the configuration for this logger has been removed, the
     *
     * @remarks
     * default configuration is applied).
     */
    namedLogConfiguration?: shared.NamedLogConfiguration;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
