import { SpeakeasyBase } from "../../../internal/utils";
import { DataCaptureConfigSummary } from "./datacaptureconfigsummary";
import { EndpointStatusEnum } from "./endpointstatusenum";
import { MonitoringSchedule } from "./monitoringschedule";
import { ProductionVariantSummary } from "./productionvariantsummary";
import { Tag } from "./tag";
/**
 * A hosted endpoint for real-time inference.
 */
export declare class Endpoint extends SpeakeasyBase {
    creationTime: Date;
    /**
     * The currently active data capture configuration used by your Endpoint.
     */
    dataCaptureConfig?: DataCaptureConfigSummary;
    endpointArn: string;
    endpointConfigName: string;
    endpointName: string;
    endpointStatus: EndpointStatusEnum;
    failureReason?: string;
    lastModifiedTime: Date;
    monitoringSchedules?: MonitoringSchedule[];
    productionVariants?: ProductionVariantSummary[];
    shadowProductionVariants?: ProductionVariantSummary[];
    tags?: Tag[];
}
