import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFollowedTagsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A List of followed tags
     */
    followedTags?: shared.FollowedTag[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
