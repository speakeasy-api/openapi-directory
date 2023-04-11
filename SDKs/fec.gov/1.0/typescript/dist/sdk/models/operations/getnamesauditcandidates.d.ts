import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNamesAuditCandidatesRequest extends SpeakeasyBase {
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
export declare class GetNamesAuditCandidatesResponse extends SpeakeasyBase {
    auditCandidateSearchList?: shared.AuditCandidateSearchList;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
