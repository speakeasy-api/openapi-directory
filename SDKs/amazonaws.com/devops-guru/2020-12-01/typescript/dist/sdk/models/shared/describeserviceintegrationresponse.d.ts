import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceIntegrationConfig } from "./serviceintegrationconfig";
/**
 * Success
 */
export declare class DescribeServiceIntegrationResponse extends SpeakeasyBase {
    /**
     *  Information about the integration of DevOps Guru with another Amazon Web Services service, such as Amazon Web Services Systems Manager.
     */
    serviceIntegration?: ServiceIntegrationConfig;
}
