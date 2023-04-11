import { SpeakeasyBase } from "../../../internal/utils";
import { FleetStatusEnum } from "./fleetstatusenum";
/**
 * Success
 */
export declare class DescribeFleetMetadataResponse extends SpeakeasyBase {
    companyCode?: string;
    createdTime?: Date;
    displayName?: string;
    fleetName?: string;
    fleetStatus?: FleetStatusEnum;
    lastUpdatedTime?: Date;
    optimizeForEndUserLocation?: boolean;
    tags?: Record<string, string>;
}
