import { SpeakeasyBase } from "../../../internal/utils";
import { CollectorHealthCheck } from "./collectorhealthcheck";
import { InventoryData } from "./inventorydata";
import { VersionStatusEnum } from "./versionstatusenum";
/**
 * Describes a Fleet Advisor collector.
 */
export declare class CollectorResponse extends SpeakeasyBase {
    /**
     * Describes the last Fleet Advisor collector health check.
     */
    collectorHealthCheck?: CollectorHealthCheck;
    collectorName?: string;
    collectorReferencedId?: string;
    collectorVersion?: string;
    createdDate?: string;
    description?: string;
    /**
     * Describes a Fleet Advisor collector inventory.
     */
    inventoryData?: InventoryData;
    lastDataReceived?: string;
    modifiedDate?: string;
    registeredDate?: string;
    s3BucketName?: string;
    serviceAccessRoleArn?: string;
    versionStatus?: VersionStatusEnum;
}
