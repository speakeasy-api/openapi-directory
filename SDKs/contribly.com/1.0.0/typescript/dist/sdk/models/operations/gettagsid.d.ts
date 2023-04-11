import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTagsIdRequest extends SpeakeasyBase {
    /**
     * Id of the tag to return
     */
    id: string;
}
export declare class GetTagsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The tag
     */
    tag?: shared.Tag;
}
