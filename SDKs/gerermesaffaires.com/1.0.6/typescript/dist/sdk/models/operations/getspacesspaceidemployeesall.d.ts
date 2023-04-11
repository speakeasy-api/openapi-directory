import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdEmployeesAllRequest extends SpeakeasyBase {
    /**
     * EmployeeNumber of the employee
     */
    employeeNumber?: string;
    /**
     * SSNumber of the employee
     */
    ssNumber?: string;
    /**
     * if present returns infos of the ContractingPartner too
     */
    withContractingPartner?: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdEmployeesAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of employees folders
     */
    getSpacesSpaceIdEmployeesAll200ApplicationJSONAllOfs?: shared.Employee[];
}
