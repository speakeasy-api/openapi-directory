import { SpeakeasyBase } from "../../../internal/utils";
import { LogsAnomalyDetectionIntegration } from "./logsanomalydetectionintegration";
import { OpsCenterIntegration } from "./opscenterintegration";
/**
 *  Information about the integration of DevOps Guru with another Amazon Web Services service, such as Amazon Web Services Systems Manager.
 */
export declare class ServiceIntegrationConfig extends SpeakeasyBase {
    logsAnomalyDetection?: LogsAnomalyDetectionIntegration;
    opsCenter?: OpsCenterIntegration;
}
