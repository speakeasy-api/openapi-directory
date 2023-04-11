import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetApiV1MediasIdSecurity extends SpeakeasyBase {
    bearerHeader: string;
}
export declare class GetApiV1MediasIdRequest extends SpeakeasyBase {
    /**
     * id
     */
    id: string;
}
export declare class GetApiV1MediasIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
