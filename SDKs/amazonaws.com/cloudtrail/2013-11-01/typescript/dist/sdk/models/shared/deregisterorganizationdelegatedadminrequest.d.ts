import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Removes CloudTrail delegated administrator permissions from a specified member account in an organization that is currently designated as a delegated administrator.
 */
export declare class DeregisterOrganizationDelegatedAdminRequest extends SpeakeasyBase {
    delegatedAdminAccountId: string;
}
