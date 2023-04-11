import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNamesCommitteesRequest extends SpeakeasyBase {
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
export declare class GetNamesCommitteesResponse extends SpeakeasyBase {
    committeeSearchList?: shared.CommitteeSearchList;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
