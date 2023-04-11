import { SpeakeasyBase } from "../../../internal/utils";
import { NameValuePair } from "./namevaluepair";
import { NetworkResourceDefinition } from "./networkresourcedefinition";
/**
 * Information about a site plan.
 */
export declare class SitePlan extends SpeakeasyBase {
    options?: NameValuePair[];
    resourceDefinitions?: NetworkResourceDefinition[];
}
