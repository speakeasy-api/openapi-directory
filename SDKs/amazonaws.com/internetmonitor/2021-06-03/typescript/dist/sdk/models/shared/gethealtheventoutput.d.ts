import { SpeakeasyBase } from "../../../internal/utils";
import { HealthEventImpactTypeEnum } from "./healtheventimpacttypeenum";
import { HealthEventStatusEnum } from "./healtheventstatusenum";
import { ImpactedLocation } from "./impactedlocation";
/**
 * Success
 */
export declare class GetHealthEventOutput extends SpeakeasyBase {
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
