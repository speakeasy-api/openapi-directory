import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about the Amazon Web Services service for which the account is a delegated administrator.
 */
export declare class DelegatedService extends SpeakeasyBase {
    delegationEnabledDate?: Date;
    servicePrincipal?: string;
}
