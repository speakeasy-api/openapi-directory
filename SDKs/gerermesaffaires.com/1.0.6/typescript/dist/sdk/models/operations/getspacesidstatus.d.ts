import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesIdStatusRequest extends SpeakeasyBase {
    /**
     * Id of the space
     */
    id: string;
}
export declare class GetSpacesIdStatus200ApplicationJSON extends SpeakeasyBase {
    code?: string;
    comment?: string;
    label?: string;
}
export declare class GetSpacesIdStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of status of
     */
    getSpacesIdStatus200ApplicationJSONAllOfs?: GetSpacesIdStatus200ApplicationJSON[];
}
