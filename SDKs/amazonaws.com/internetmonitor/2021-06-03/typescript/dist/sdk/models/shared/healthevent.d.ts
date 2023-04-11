import { SpeakeasyBase } from "../../../internal/utils";
import { HealthEventImpactTypeEnum } from "./healtheventimpacttypeenum";
import { HealthEventStatusEnum } from "./healtheventstatusenum";
import { ImpactedLocation } from "./impactedlocation";
/**
 * Information about a health event created in a monitor in Amazon CloudWatch Internet Monitor.
 */
export declare class HealthEvent extends SpeakeasyBase {
    createdAt?: Date;
    endedAt?: Date;
    eventArn: string;
    eventId: string;
    impactType: HealthEventImpactTypeEnum;
    impactedLocations: ImpactedLocation[];
    lastUpdatedAt: Date;
    percentOfTotalTrafficImpacted?: number;
    startedAt: Date;
    status: HealthEventStatusEnum;
}
