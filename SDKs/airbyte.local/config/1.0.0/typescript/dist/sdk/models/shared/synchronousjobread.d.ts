import { SpeakeasyBase } from "../../../internal/utils";
import { JobConfigTypeEnum } from "./jobconfigtypeenum";
import { LogRead } from "./logread";
export declare class SynchronousJobRead extends SpeakeasyBase {
    /**
     * only present if a config id was provided.
     */
    configId?: string;
    configType: JobConfigTypeEnum;
    connectorConfigurationUpdated?: boolean;
    createdAt: number;
    endedAt: number;
    id: string;
    logs?: LogRead;
    succeeded: boolean;
}
