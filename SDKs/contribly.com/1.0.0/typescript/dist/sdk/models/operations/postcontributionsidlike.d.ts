import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostContributionsIdLikeRequest extends SpeakeasyBase {
    /**
     * Id of the contribution
     */
    id: string;
}
export declare class PostContributionsIdLikeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The updated like count for this contribution.
     */
    postContributionsIdLike200ApplicationJSONNumber?: number;
}
