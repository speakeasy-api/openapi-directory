import { SpeakeasyBase } from "../../../internal/utils";
import { GetResourcePoliciesResponseEntry } from "./getresourcepoliciesresponseentry";
/**
 * Success
 */
export declare class GetResourcePoliciesResponse extends SpeakeasyBase {
    nextToken?: string;
    policies?: GetResourcePoliciesResponseEntry[];
}
