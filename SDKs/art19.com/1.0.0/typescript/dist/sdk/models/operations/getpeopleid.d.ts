import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPeopleIdSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetPeopleIdRequest extends SpeakeasyBase {
    /**
     * The ID of the person resource to load.
     */
    id: string;
}
/**
 * Success
 */
export declare class GetPeopleId200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.Person;
    /**
     * Links related to the retrieved resource
     */
    links?: shared.ResourceLink;
}
export declare class GetPeopleIdResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    getPeopleId200ApplicationVndApiPlusJsonObject?: GetPeopleId200ApplicationVndApiPlusJson;
}
