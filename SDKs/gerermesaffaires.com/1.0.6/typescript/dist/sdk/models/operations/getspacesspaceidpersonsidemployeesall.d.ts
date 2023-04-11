import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdPersonsIdEmployeesAllRequest extends SpeakeasyBase {
    /**
     * Id of the person or memberId
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdPersonsIdEmployeesAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of employees folders
     */
    getSpacesSpaceIdPersonsIdEmployeesAll200ApplicationJSONAllOfs?: shared.Employee[];
}
