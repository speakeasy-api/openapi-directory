import { SpeakeasyBase } from "../../../internal/utils";
import { ResultCodeEnum } from "./resultcodeenum";
/**
 * The result of the deployment.
 */
export declare class DeploymentResult extends SpeakeasyBase {
    message?: string;
    resultCode?: ResultCodeEnum;
}
