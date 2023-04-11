import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceDetails } from "./resourcedetails";
import { ResourceTypeEnum } from "./resourcetypeenum";
/**
 * Details about the resource involved in a finding.
 */
export declare class Resource extends SpeakeasyBase {
    details?: ResourceDetails;
    id: string;
    partition?: string;
    region?: string;
    tags?: Record<string, string>;
    type: ResourceTypeEnum;
}
