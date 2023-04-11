import { SpeakeasyBase } from "../../../internal/utils";
import { AlarmConfiguration } from "./alarmconfiguration";
import { ExecutionModeEnum } from "./executionmodeenum";
import { Tag } from "./tag";
import { Target } from "./target";
import { TargetLocation } from "./targetlocation";
export declare class StartAutomationExecutionRequest extends SpeakeasyBase {
    alarmConfiguration?: AlarmConfiguration;
    clientToken?: string;
    documentName: string;
    documentVersion?: string;
    maxConcurrency?: string;
    maxErrors?: string;
    mode?: ExecutionModeEnum;
    parameters?: Record<string, string[]>;
    tags?: Tag[];
    targetLocations?: TargetLocation[];
    targetMaps?: Record<string, string[]>[];
    targetParameterName?: string;
    targets?: Target[];
}
