import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteAs2StationsIdRequest extends SpeakeasyBase {
    /**
     * As2 Station ID.
     */
    id: number;
}
export declare class DeleteAs2StationsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
