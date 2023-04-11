import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Defines application resource errors.
 */
export declare class ResourceError extends SpeakeasyBase {
    logicalResourceId?: string;
    physicalResourceId?: string;
    reason?: string;
}
