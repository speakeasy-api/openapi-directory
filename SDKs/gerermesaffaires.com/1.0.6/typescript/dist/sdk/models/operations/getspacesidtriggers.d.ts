import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesIdTriggersSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class GetSpacesIdTriggersRequest extends SpeakeasyBase {
    /**
     * Id of the space
     */
    id: string;
}
export declare class GetSpacesIdTriggersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of triggers
     */
    getSpacesIdTriggers200ApplicationJSONAllOfs?: shared.Trigger[];
}
