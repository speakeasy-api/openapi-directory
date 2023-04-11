import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetReisezentrenRequest extends SpeakeasyBase {
    /**
     * A station name or part of it
     */
    name?: string;
}
export declare class GetReisezentrenResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * No travel centers could be found matching the given name
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * List has been created
     */
    travelCenterList?: shared.TravelCenter[];
}
