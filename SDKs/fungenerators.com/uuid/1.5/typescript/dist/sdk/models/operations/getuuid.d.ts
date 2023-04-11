import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetUuidSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: string;
}
export declare class GetUuidRequest extends SpeakeasyBase {
    /**
     * Number of UUID's to generate (defaults to 1)
     */
    count?: number;
}
export declare class GetUuidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
