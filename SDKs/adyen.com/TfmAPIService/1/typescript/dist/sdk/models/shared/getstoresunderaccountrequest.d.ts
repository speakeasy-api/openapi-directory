import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetStoresUnderAccountRequest extends SpeakeasyBase {
    /**
     * The company account. If you only specify this parameter, the response includes the stores of all merchant accounts that are associated with the company account.
     */
    companyAccount: string;
    /**
     * The merchant account. With this parameter, the response only includes the stores of the specified merchant account.
     */
    merchantAccount?: string;
}
