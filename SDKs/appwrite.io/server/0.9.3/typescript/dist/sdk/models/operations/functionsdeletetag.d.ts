import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class FunctionsDeleteTagSecurity extends SpeakeasyBase {
    key: string;
    project: string;
}
export declare class FunctionsDeleteTagRequest extends SpeakeasyBase {
    /**
     * Function unique ID.
     */
    functionId: string;
    /**
     * Tag unique ID.
     */
    tagId: string;
}
export declare class FunctionsDeleteTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
