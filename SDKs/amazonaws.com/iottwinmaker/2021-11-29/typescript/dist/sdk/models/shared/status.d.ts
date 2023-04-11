import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetails } from "./errordetails";
import { StateEnum } from "./stateenum";
/**
 * An object that represents the status of an entity, component, component type, or workspace.
 */
export declare class Status extends SpeakeasyBase {
    error?: ErrorDetails;
    state?: StateEnum;
}
