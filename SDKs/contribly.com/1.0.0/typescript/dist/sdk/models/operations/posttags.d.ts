import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostTagsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The new tag submission failed to validate. Check the response body for details.
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Tag created
     */
    tag?: shared.Tag;
}
