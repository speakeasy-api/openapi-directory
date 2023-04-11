import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsSetActionsOidcCustomIssuerPolicyForEnterpriseRequest extends SpeakeasyBase {
    actionsOidcCustomIssuerPolicyForEnterprise: shared.ActionsOidcCustomIssuerPolicyForEnterprise;
    /**
     * The slug version of the enterprise name. You can also substitute this value with the enterprise id.
     */
    enterprise: string;
}
export declare class ActionsSetActionsOidcCustomIssuerPolicyForEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
