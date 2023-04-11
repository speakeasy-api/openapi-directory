import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteApiKeysIdRequest extends SpeakeasyBase {
    /**
     * Api Key ID.
     */
    id: number;
}
export declare class DeleteApiKeysIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
