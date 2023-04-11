import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteApiV1ClipsIdSecurity extends SpeakeasyBase {
    bearerHeader: string;
}
export declare class DeleteApiV1ClipsIdRequest extends SpeakeasyBase {
    /**
     * The id of the clip to be retrieved
     */
    id: string;
}
export declare class DeleteApiV1ClipsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
