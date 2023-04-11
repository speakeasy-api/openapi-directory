import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateTagRequest extends SpeakeasyBase {
    createTagModel: shared.CreateTagModel;
    /**
     * The identifier of the Organization.
     */
    productId: string;
}
export declare class CreateTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * When the creation was successful.
     */
    tagModel?: shared.TagModel;
    /**
     * When the creation was successful.
     */
    tagModelHaljson?: shared.TagModelHaljson;
}
