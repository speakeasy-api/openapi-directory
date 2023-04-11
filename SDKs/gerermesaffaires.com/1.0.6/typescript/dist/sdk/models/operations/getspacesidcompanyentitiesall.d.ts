import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesIdCompanyEntitiesAllRequest extends SpeakeasyBase {
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
export declare class GetSpacesIdCompanyEntitiesAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of company entities
     */
    getSpacesIdCompanyEntitiesAll200ApplicationJSONAllOfs?: shared.CompanyEntity[];
}
