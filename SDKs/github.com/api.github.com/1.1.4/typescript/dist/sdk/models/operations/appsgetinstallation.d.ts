import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppsGetInstallationRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the installation.
     */
    installationId: number;
}
export declare class AppsGetInstallationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    installation?: shared.Installation;
}
