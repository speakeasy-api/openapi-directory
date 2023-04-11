import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTagsetsIdRequest extends SpeakeasyBase {
    /**
     * Id of the tag set to return
     */
    id: string;
}
export declare class GetTagsetsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The tag set
     */
    tagSet?: shared.TagSet;
}
