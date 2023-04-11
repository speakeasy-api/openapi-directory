import { SpeakeasyBase } from "../../../internal/utils";
import { MemberAccountStatus } from "./memberaccountstatus";
/**
 * Success
 */
export declare class GetOrganizationConfigRuleDetailedStatusResponse extends SpeakeasyBase {
    nextToken?: string;
    organizationConfigRuleDetailedStatus?: MemberAccountStatus[];
}
