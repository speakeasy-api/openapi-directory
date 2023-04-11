import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdCustomersRequest extends SpeakeasyBase {
    /**
     * CustomerNumber of the customer
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
export declare class GetSpacesSpaceIdCustomersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of customer folders
     */
    getSpacesSpaceIdCustomers200ApplicationJSONAllOfs?: shared.Customer[];
}
