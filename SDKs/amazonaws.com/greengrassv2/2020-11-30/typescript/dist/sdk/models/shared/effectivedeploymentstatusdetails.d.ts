import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Contains all error-related information for the deployment record. The status details will be null if the deployment is in a success state.</p> <note> <p>Greengrass nucleus v2.8.0 or later is required to get an accurate <code>errorStack</code> and <code>errorTypes</code> response. This field will not be returned for earlier Greengrass nucleus versions.</p> </note>
 */
export declare class EffectiveDeploymentStatusDetails extends SpeakeasyBase {
    errorStack?: string[];
    errorTypes?: string[];
}
