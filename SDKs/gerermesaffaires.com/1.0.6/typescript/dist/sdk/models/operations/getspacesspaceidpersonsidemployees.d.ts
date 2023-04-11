import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdPersonsIdEmployeesRequest extends SpeakeasyBase {
    /**
     * Id of the person or memberId
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdPersonsIdEmployeesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of employees folders
     */
    getSpacesSpaceIdPersonsIdEmployees200ApplicationJSONAllOfs?: shared.Employee[];
}
