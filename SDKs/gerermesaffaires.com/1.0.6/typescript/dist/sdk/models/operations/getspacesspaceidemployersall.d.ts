import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdEmployersAllRequest extends SpeakeasyBase {
    /**
     * EmployeeNumber of the employer contract
     */
    employeeNumber?: string;
    /**
     * if present returns infos of the ContractingPartner too
     */
    withContractingPartner?: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdEmployersAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of employees folders
     */
    getSpacesSpaceIdEmployersAll200ApplicationJSONAllOfs?: shared.Employee[];
}
