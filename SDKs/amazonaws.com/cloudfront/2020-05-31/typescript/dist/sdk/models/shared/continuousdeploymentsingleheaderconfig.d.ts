import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This configuration determines which HTTP requests are sent to the staging distribution. If the HTTP request contains a header and value that matches what you specify here, the request is sent to the staging distribution. Otherwise the request is sent to the primary distribution.
 */
export declare class ContinuousDeploymentSingleHeaderConfig extends SpeakeasyBase {
    header: string;
    value: string;
}
