import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The result of the <code>ResolveCustomer</code> operation. Contains the <code>CustomerIdentifier</code> along with the <code>CustomerAWSAccountId</code> and <code>ProductCode</code>.
 */
export declare class ResolveCustomerResult extends SpeakeasyBase {
    customerAWSAccountId?: string;
    customerIdentifier?: string;
    productCode?: string;
}
