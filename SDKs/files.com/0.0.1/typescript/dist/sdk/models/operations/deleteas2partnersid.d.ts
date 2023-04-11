import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteAs2PartnersIdRequest extends SpeakeasyBase {
    /**
     * As2 Partner ID.
     */
    id: number;
}
export declare class DeleteAs2PartnersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
