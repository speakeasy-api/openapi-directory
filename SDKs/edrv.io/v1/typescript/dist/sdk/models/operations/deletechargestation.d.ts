import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteChargeStationRequest extends SpeakeasyBase {
    /**
     * The charge station id that needs to be deleted
     */
    id: string;
}
export declare class DeleteChargeStationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
