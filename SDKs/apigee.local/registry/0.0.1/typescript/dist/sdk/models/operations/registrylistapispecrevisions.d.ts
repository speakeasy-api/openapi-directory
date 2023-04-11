import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RegistryListApiSpecRevisionsRequest extends SpeakeasyBase {
    /**
     * The api id.
     */
    api: string;
    /**
     * The location id.
     */
    location: string;
    /**
     * The maximum number of revisions to return per page.
     */
    pageSize?: number;
    /**
     * The page token, received from a previous ListApiSpecRevisions call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string;
    /**
     * The project id.
     */
    project: string;
    /**
     * The spec id.
     */
    spec: string;
    /**
     * The version id.
     */
    version: string;
}
export declare class RegistryListApiSpecRevisionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listApiSpecRevisionsResponse?: shared.ListApiSpecRevisionsResponse;
    /**
     * Default error response
     */
    status?: shared.Status;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
