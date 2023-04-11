import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Status of the person
 */
export declare enum GetSpacesIdPersonsAllValidatedEnum {
    True = "true",
    False = "false"
}
export declare class GetSpacesIdPersonsAllRequest extends SpeakeasyBase {
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
    validated?: GetSpacesIdPersonsAllValidatedEnum;
    /**
     * Id of the space
     */
    id: string;
}
export declare class GetSpacesIdPersonsAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of persons
     */
    getSpacesIdPersonsAll200ApplicationJSONAllOfs?: shared.Person[];
}
