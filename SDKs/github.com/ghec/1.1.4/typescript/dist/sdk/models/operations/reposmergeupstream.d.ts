import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposMergeUpstreamRequestBody extends SpeakeasyBase {
    /**
     * The name of the branch which should be updated to match upstream.
     */
    branch: string;
}
export declare class ReposMergeUpstreamRequest extends SpeakeasyBase {
    requestBody: ReposMergeUpstreamRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ReposMergeUpstreamResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The branch has been successfully synced with the upstream repository
     */
    mergedUpstream?: shared.MergedUpstream;
}
