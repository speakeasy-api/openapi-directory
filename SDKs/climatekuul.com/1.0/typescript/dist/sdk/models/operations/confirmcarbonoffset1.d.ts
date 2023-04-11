import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const ConfirmCarbonOffset1ServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class ConfirmCarbonOffset1RequestBody extends SpeakeasyBase {
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
export declare class ConfirmCarbonOffset1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
