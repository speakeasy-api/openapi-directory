import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTagsetsRequest extends SpeakeasyBase {
    /**
     * Restrict results to those owned by this user.
     */
    ownedBy?: string;
    /**
     * Restrict results by urlWords. Should be used with ownedBy when searching for one of your own tag sets.
     */
    urlWords?: string;
}
export declare class GetTagsetsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of tag sets
     */
    tagSets?: shared.TagSet[];
}
