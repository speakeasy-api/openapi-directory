import { SpeakeasyBase } from "../../../internal/utils";
import { GluePolicy } from "./gluepolicy";
/**
 * Success
 */
export declare class GetResourcePoliciesResponse extends SpeakeasyBase {
    getResourcePoliciesResponseList?: GluePolicy[];
    nextToken?: string;
}
