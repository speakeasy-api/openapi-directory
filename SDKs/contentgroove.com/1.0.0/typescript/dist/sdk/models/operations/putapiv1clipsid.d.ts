import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutApiV1ClipsIdSecurity extends SpeakeasyBase {
    bearerHeader: string;
}
export declare class PutApiV1ClipsIdRequestBodyDataAttributes extends SpeakeasyBase {
    endTime?: number;
    name?: string;
    startTime?: number;
}
export declare class PutApiV1ClipsIdRequestBodyData extends SpeakeasyBase {
    attributes: PutApiV1ClipsIdRequestBodyDataAttributes;
}
export declare class PutApiV1ClipsIdRequestBody extends SpeakeasyBase {
    data: PutApiV1ClipsIdRequestBodyData;
}
export declare class PutApiV1ClipsIdRequest extends SpeakeasyBase {
    requestBody: PutApiV1ClipsIdRequestBody;
    /**
     * The id of the clip to be retrieved
     */
    id: string;
}
export declare class PutApiV1ClipsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
