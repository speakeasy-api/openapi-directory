import { SpeakeasyBase } from "../../../internal/utils";
import { InsightHealth } from "./insighthealth";
/**
 *  Information about the health of Amazon Web Services resources in your account that are specified by an Amazon Web Services CloudFormation stack.
 */
export declare class CloudFormationHealth extends SpeakeasyBase {
    analyzedResourceCount?: number;
    insight?: InsightHealth;
    stackName?: string;
}
