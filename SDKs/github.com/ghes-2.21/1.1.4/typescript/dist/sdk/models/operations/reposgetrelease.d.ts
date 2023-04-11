import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposGetReleaseRequest extends SpeakeasyBase {
    owner: string;
    /**
     * release_id parameter
     */
    releaseId: number;
    repo: string;
}
export declare class ReposGetReleaseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * **Note:** This returns an `upload_url` key corresponding to the endpoint for uploading release assets. This key is a [hypermedia resource](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#hypermedia).
     */
    release?: shared.Release;
}
