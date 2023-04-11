import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceError } from "./resourceerror";
/**
 *  A list of errors retrieving an application's resources.
 */
export declare class ResourceErrorsDetails extends SpeakeasyBase {
    hasMoreErrors?: boolean;
    resourceErrors?: ResourceError[];
}
