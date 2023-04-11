import { SpeakeasyBase } from "../../../internal/utils";
import { FileConfiguration } from "./fileconfiguration";
import { ScheduleConfiguration } from "./scheduleconfiguration";
/**
 * Success
 */
export declare class CreateDataIntegrationResponse extends SpeakeasyBase {
    arn?: string;
    clientToken?: string;
    description?: string;
    fileConfiguration?: FileConfiguration;
    id?: string;
    kmsKey?: string;
    name?: string;
    objectConfiguration?: Record<string, Record<string, string[]>>;
    scheduleConfiguration?: ScheduleConfiguration;
    sourceURI?: string;
    tags?: Record<string, string>;
}
