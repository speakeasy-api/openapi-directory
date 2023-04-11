import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppsRemoveRepoFromInstallationRequest extends SpeakeasyBase {
    /**
     * installation_id parameter
     */
    installationId: number;
    repositoryId: number;
}
export declare class AppsRemoveRepoFromInstallationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
}
