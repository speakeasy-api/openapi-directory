import { SpeakeasyBase } from "../../../internal/utils";
export declare class ConfigLog extends SpeakeasyBase {
    id: number;
    key: string;
    newValue?: string;
    /**
     * The entity who made the config key modification
     */
    origin?: string;
    previousValue?: string;
    /**
     * Timestamp of when the configuration key was changed
     */
    timestamp: Date;
    /**
     * Action done on the config: add, update or delete
     */
    type: string;
}
