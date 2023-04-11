import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppsGetRepoInstallationRequest extends SpeakeasyBase {
    /**
     * This API is under preview and subject to change.
     */
    accept: string;
    owner: string;
    repo: string;
}
export declare class AppsGetRepoInstallationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Moved permanently
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    installationGhes2?: shared.InstallationGhes2;
}
