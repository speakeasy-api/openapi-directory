import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyGeneration } from "./policygeneration";
/**
 * Success
 */
export declare class ListPolicyGenerationsResponse extends SpeakeasyBase {
    nextToken?: string;
    policyGenerations: PolicyGeneration[];
}
