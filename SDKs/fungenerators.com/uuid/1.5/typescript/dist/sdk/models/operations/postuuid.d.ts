import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostUuidSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: string;
}
export declare class PostUuidRequest extends SpeakeasyBase {
    /**
     * UUID String to parse
     */
    uuidstr: string;
}
export declare class PostUuidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
