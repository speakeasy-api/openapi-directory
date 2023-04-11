import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTagsTagIdRequest extends SpeakeasyBase {
    /**
     * Id of the tag
     */
    tagId: number;
}
export declare class GetTagsTagIdResponse extends SpeakeasyBase {
    apiCoreDtoTagsTag?: shared.ApiCoreDtoTagsTag;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
