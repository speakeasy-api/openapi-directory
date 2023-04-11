import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyComplianceStatus } from "./policycompliancestatus";
/**
 * Success
 */
export declare class ListComplianceStatusResponse extends SpeakeasyBase {
    nextToken?: string;
    policyComplianceStatusList?: PolicyComplianceStatus[];
}
