import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposDeleteRequest extends SpeakeasyBase {
    owner: string;
    repo: string;
}
/**
 * If an organization owner has configured the organization to prevent members from deleting organization-owned repositories, a member will get this response:
 */
export declare class ReposDelete403ApplicationJSON extends SpeakeasyBase {
    documentationUrl?: string;
    message?: string;
}
export declare class ReposDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Temporary Redirect
     */
    basicError?: shared.BasicError;
    /**
     * If an organization owner has configured the organization to prevent members from deleting organization-owned repositories, a member will get this response:
     */
    reposDelete403ApplicationJSONObject?: ReposDelete403ApplicationJSON;
}
