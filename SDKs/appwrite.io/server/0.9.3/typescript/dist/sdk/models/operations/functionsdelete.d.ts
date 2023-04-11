import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class FunctionsDeleteSecurity extends SpeakeasyBase {
    key: string;
    project: string;
}
export declare class FunctionsDeleteRequest extends SpeakeasyBase {
    /**
     * Function unique ID.
     */
    functionId: string;
}
export declare class FunctionsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
