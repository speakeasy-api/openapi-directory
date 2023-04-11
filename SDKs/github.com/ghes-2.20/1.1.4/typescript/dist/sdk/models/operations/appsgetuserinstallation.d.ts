import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppsGetUserInstallationRequest extends SpeakeasyBase {
    /**
     * This API is under preview and subject to change.
     */
    accept: string;
    username: string;
}
export declare class AppsGetUserInstallationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    installationGhes2?: shared.InstallationGhes2;
}
