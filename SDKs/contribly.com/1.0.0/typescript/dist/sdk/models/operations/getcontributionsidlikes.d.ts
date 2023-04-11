import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetContributionsIdLikesRequest extends SpeakeasyBase {
    /**
     * Id of the contribution
     */
    id: string;
}
export declare class GetContributionsIdLikesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of user ids.
     */
    getContributionsIdLikes200ApplicationJSONStrings?: string[];
}
