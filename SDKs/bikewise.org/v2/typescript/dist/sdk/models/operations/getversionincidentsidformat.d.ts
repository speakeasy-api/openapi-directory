import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETVersionIncidentsIdFormatRequest extends SpeakeasyBase {
    /**
     * <p>Incident ID</p>
     *
     * @remarks
     *
     */
    id: number;
}
export declare class GETVersionIncidentsIdFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
