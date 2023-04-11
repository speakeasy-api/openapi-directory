import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetApiV1ClipsIdSecurity extends SpeakeasyBase {
    bearerHeader: string;
}
export declare class GetApiV1ClipsIdRequest extends SpeakeasyBase {
    /**
     * The id of the clip to be retrieved
     */
    id: string;
}
export declare class GetApiV1ClipsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
