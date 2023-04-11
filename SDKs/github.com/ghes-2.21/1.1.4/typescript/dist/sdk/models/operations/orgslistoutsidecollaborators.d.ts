import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Filter the list of outside collaborators. Can be one of:
 *
 * @remarks
 * \* `2fa_disabled`: Outside collaborators without [two-factor authentication](https://github.com/blog/1614-two-factor-authentication) enabled.
 * \* `all`: All outside collaborators.
 */
export declare enum OrgsListOutsideCollaboratorsFilterEnum {
    TwofaDisabled = "2fa_disabled",
    All = "all"
}
export declare class OrgsListOutsideCollaboratorsRequest extends SpeakeasyBase {
    /**
     * Filter the list of outside collaborators. Can be one of:
     *
     * @remarks
     * \* `2fa_disabled`: Outside collaborators without [two-factor authentication](https://github.com/blog/1614-two-factor-authentication) enabled.
     * \* `all`: All outside collaborators.
     */
    filter?: OrgsListOutsideCollaboratorsFilterEnum;
    org: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
}
export declare class OrgsListOutsideCollaboratorsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    simpleUsers?: shared.SimpleUser[];
}
