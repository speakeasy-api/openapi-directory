import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyToPath } from "./policytopath";
/**
 * Success
 */
export declare class LookupPolicyResponse extends SpeakeasyBase {
    nextToken?: string;
    policyToPathList?: PolicyToPath[];
}
