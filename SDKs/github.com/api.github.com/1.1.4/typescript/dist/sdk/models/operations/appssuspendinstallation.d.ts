import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppsSuspendInstallationRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the installation.
     */
    installationId: number;
}
export declare class AppsSuspendInstallationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
}
