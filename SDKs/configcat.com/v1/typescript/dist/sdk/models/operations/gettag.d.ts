import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTagRequest extends SpeakeasyBase {
    /**
     * The identifier of the Tag.
     */
    tagId: number;
}
export declare class GetTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * When everything is ok, the tag data returned.
     */
    tagModel?: shared.TagModel;
    /**
     * When everything is ok, the tag data returned.
     */
    tagModelHaljson?: shared.TagModelHaljson;
}
