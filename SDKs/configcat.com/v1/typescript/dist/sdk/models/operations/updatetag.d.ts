import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateTagRequest extends SpeakeasyBase {
    updateTagModel: shared.UpdateTagModel;
    /**
     * The identifier of the Tag.
     */
    tagId: number;
}
export declare class UpdateTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    tagModel?: shared.TagModel;
    tagModelHaljson?: shared.TagModelHaljson;
}
