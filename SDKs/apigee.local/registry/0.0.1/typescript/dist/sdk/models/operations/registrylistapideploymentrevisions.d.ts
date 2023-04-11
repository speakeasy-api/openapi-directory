import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RegistryListApiDeploymentRevisionsRequest extends SpeakeasyBase {
    /**
     * The api id.
     */
    api: string;
    /**
     * The deployment id.
     */
    deployment: string;
    /**
     * The location id.
     */
    location: string;
    /**
     * The maximum number of revisions to return per page.
     */
    pageSize?: number;
    /**
     * The page token, received from a previous ListApiDeploymentRevisions call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string;
    /**
     * The project id.
     */
    project: string;
}
export declare class RegistryListApiDeploymentRevisionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listApiDeploymentRevisionsResponse?: shared.ListApiDeploymentRevisionsResponse;
    /**
     * Default error response
     */
    status?: shared.Status;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
