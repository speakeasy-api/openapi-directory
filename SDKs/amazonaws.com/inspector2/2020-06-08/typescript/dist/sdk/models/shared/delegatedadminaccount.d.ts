import { SpeakeasyBase } from "../../../internal/utils";
import { DelegatedAdminStatusEnum } from "./delegatedadminstatusenum";
/**
 * Details of the Amazon Inspector delegated administrator for your organization.
 */
export declare class DelegatedAdminAccount extends SpeakeasyBase {
    accountId?: string;
    status?: DelegatedAdminStatusEnum;
}
