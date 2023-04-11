import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteApiV1MediasIdSecurity extends SpeakeasyBase {
    bearerHeader: string;
}
export declare class DeleteApiV1MediasIdRequest extends SpeakeasyBase {
    /**
     * id
     */
    id: string;
}
export declare class DeleteApiV1MediasIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
