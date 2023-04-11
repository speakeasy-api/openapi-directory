import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeletePublicKeysIdRequest extends SpeakeasyBase {
    /**
     * Public Key ID.
     */
    id: number;
}
export declare class DeletePublicKeysIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
