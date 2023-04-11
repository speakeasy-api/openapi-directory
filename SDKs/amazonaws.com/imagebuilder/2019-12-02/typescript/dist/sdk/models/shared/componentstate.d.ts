import { SpeakeasyBase } from "../../../internal/utils";
import { ComponentStatusEnum } from "./componentstatusenum";
/**
 * A group of fields that describe the current status of components that are no longer active.
 */
export declare class ComponentState extends SpeakeasyBase {
    reason?: string;
    status?: ComponentStatusEnum;
}
