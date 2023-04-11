import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TagsDeleteRequest extends SpeakeasyBase {
    /**
     * Id of the tag
     */
    tagId: number;
}
export declare class TagsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    systemObject?: Record<string, any>;
}
