import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdCustomersAllRequest extends SpeakeasyBase {
    /**
     * CustomerNumber of the employee
     */
    customerNumber?: string;
    /**
     * if present returns infos of the ContractingPartner too
     */
    withContractingPartner?: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdCustomersAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of customer folders
     */
    getSpacesSpaceIdCustomersAll200ApplicationJSONAllOfs?: shared.Customer[];
}
