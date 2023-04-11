import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FunctionsGetTagSecurity extends SpeakeasyBase {
    key: string;
    project: string;
}
export declare class FunctionsGetTagRequest extends SpeakeasyBase {
    /**
     * Function unique ID.
     */
    functionId: string;
    /**
     * Tag unique ID.
     */
    tagId: string;
}
export declare class FunctionsGetTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Tag
     */
    tag?: shared.Tag;
}
