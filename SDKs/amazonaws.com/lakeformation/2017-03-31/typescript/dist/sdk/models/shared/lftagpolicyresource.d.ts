import { SpeakeasyBase } from "../../../internal/utils";
import { LFTag } from "./lftag";
import { ResourceTypeEnum } from "./resourcetypeenum";
/**
 * A structure containing a list of LF-tag conditions that apply to a resource's LF-tag policy.
 */
export declare class LFTagPolicyResource extends SpeakeasyBase {
    catalogId?: string;
    expression: LFTag[];
    resourceType: ResourceTypeEnum;
}
