import { SpeakeasyBase } from "../../../internal/utils";
import { CollectorStatusEnum } from "./collectorstatusenum";
/**
 * Describes the last Fleet Advisor collector health check.
 */
export declare class CollectorHealthCheck extends SpeakeasyBase {
    collectorStatus?: CollectorStatusEnum;
    localCollectorS3Access?: boolean;
    webCollectorGrantedRoleBasedAccess?: boolean;
    webCollectorS3Access?: boolean;
}
