import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTagsRequest extends SpeakeasyBase {
    /**
     * Restrict results to those owned by this user.
     */
    ownedBy?: string;
    /**
     * Restrict results to tags belonging to this tag set.
     */
    tagSet?: string;
    /**
     * Restrict results by urlWords. Should be used with ownedBy when searching for one of your own tags.
     */
    urlWords?: string;
}
export declare class GetTagsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of tags
     */
    tags?: shared.Tag[];
}
