import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutApiV1MediasIdSecurity extends SpeakeasyBase {
    bearerHeader: string;
}
export declare class PutApiV1MediasIdRequestBodyDataAttributes extends SpeakeasyBase {
    description?: string;
    name?: string;
}
export declare class PutApiV1MediasIdRequestBodyData extends SpeakeasyBase {
    attributes: PutApiV1MediasIdRequestBodyDataAttributes;
}
export declare class PutApiV1MediasIdRequestBody extends SpeakeasyBase {
    data: PutApiV1MediasIdRequestBodyData;
}
export declare class PutApiV1MediasIdRequest extends SpeakeasyBase {
    requestBody: PutApiV1MediasIdRequestBody;
    /**
     * id
     */
    id: string;
}
export declare class PutApiV1MediasIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
