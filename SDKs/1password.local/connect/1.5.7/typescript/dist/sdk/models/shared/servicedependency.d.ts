import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of a registered server dependency.
 */
export declare class ServiceDependency extends SpeakeasyBase {
    /**
     * Human-readable message for explaining the current state.
     */
    message?: string;
    service?: string;
    status?: string;
}
