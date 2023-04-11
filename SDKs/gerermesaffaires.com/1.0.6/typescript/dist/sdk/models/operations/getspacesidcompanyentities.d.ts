import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesIdCompanyEntitiesRequest extends SpeakeasyBase {
    /**
     * Legal name of the company entity
     */
    legalName?: string;
    /**
     * Name of the company entity
     */
    name?: string;
    /**
     * registration number of the company entity
     */
    registrationNumber?: string;
    /**
     * Id of the space
     */
    id: string;
}
export declare class GetSpacesIdCompanyEntitiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of company entities
     */
    getSpacesIdCompanyEntities200ApplicationJSONAllOfs?: shared.CompanyEntity[];
}
