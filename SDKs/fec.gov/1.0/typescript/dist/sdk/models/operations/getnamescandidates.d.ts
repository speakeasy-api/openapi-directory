import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNamesCandidatesRequest extends SpeakeasyBase {
    /**
     *
     * @remarks
     * API key for https://api.data.gov. Get one at https://api.data.gov/signup.
     *
     */
    apiKey: string;
    /**
     * Name (candidate or committee) to search for
     */
    q: string[];
}
export declare class GetNamesCandidatesResponse extends SpeakeasyBase {
    candidateSearchList?: shared.CandidateSearchList;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
