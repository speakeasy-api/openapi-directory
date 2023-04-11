import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteTokenRequest extends SpeakeasyBase {
    /**
     * The token id that needs to be deleted
     */
    id: string;
}
export declare class DeleteTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
