import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const ConfirmCarbonOffset4ServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class ConfirmCarbonOffset4RequestBody extends SpeakeasyBase {
    /**
     * Confirm Carbon Offset (Value = y/n)
     */
    carbonOffset: string;
    /**
     * Contact email
     */
    contactEmail?: string;
    /**
     * Contact first name
     */
    contactFirstName?: string;
    /**
     * Contact last name
     */
    contactLastName?: string;
    /**
     * transaction_id
     */
    transactionId: string;
}
export declare class ConfirmCarbonOffset4Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
