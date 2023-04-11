import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetReisezentrenIdRequest extends SpeakeasyBase {
    /**
     * Station id
     */
    id: string;
}
export declare class GetReisezentrenIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
