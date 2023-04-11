import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceDetails } from "./resourcedetails";
/**
 * Details about the resource involved in a finding.
 */
export declare class Resource extends SpeakeasyBase {
    details?: ResourceDetails;
    id?: string;
    tags?: Record<string, string>;
    type?: string;
}
