import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Describes a request to create or edit the <code>StopInstanceOnIdle</code> add-on.</p> <important> <p>This add-on only applies to Lightsail for Research resources.</p> </important>
 */
export declare class StopInstanceOnIdleRequest extends SpeakeasyBase {
    duration?: string;
    threshold?: string;
}
