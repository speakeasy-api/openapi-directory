import { SpeakeasyBase } from "../../../internal/utils";
import { SettingMetadata } from "./settingmetadata";
/**
 * the payload format
 */
export declare enum SenderFormatEnum {
    Csv = "CSV"
}
/**
 * An sender of reports to the data hub
 */
export declare class SenderInput extends SpeakeasyBase {
    /**
     * Display ready description of the sender
     */
    description: string;
    /**
     * the payload format
     */
    format: SenderFormatEnum;
    /**
     * Unique name for the senders, includes the orgninzation name
     */
    name: string;
    /**
     * the schema name for this sender
     */
    schema: string;
    /**
     * Topic of for this sender. Must match the supported topics.
     */
    topic: string;
}
/**
 * An sender of reports to the data hub
 */
export declare class Sender extends SpeakeasyBase {
    /**
     * Display ready description of the sender
     */
    description: string;
    /**
     * the payload format
     */
    format: SenderFormatEnum;
    /**
     * The metadata associated with an setting
     */
    meta?: SettingMetadata;
    /**
     * Unique name for the senders, includes the orgninzation name
     */
    name: string;
    /**
     * Name of the organization that this sender belongs to
     */
    organizationName?: string;
    /**
     * the schema name for this sender
     */
    schema: string;
    /**
     * Topic of for this sender. Must match the supported topics.
     */
    topic: string;
}
