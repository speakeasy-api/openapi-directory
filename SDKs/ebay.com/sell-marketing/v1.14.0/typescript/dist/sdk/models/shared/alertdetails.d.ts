import { SpeakeasyBase } from "../../../internal/utils";
import { AlertDimension } from "./alertdimension";
import { Aspect } from "./aspect";
/**
 * A type that contains the alert detail fields.
 */
export declare class AlertDetails extends SpeakeasyBase {
    /**
     * A type that contains the aspect fields.
     */
    aspect?: Aspect;
    /**
     * A type that contains the dimension fields.
     */
    dimension?: AlertDimension;
}
