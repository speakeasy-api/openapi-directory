import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Status of the person
 */
export declare enum GetSpacesIdPersonsValidatedEnum {
    True = "true",
    False = "false"
}
export declare class GetSpacesIdPersonsRequest extends SpeakeasyBase {
    /**
     * Email of the person
     */
    email?: string;
    /**
     * Function of the person
     */
    function?: string;
    /**
     * Name of the person
     */
    name?: string;
    /**
     * index range of the results
     */
    range?: string;
    /**
     * Status of the person
     */
    validated?: GetSpacesIdPersonsValidatedEnum;
    /**
     * Id of the space
     */
    id: string;
}
export declare class GetSpacesIdPersonsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of persons
     */
    getSpacesIdPersons200ApplicationJSONAllOfs?: shared.Person[];
}
