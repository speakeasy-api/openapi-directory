import { SpeakeasyBase } from "../../../internal/utils";
import { SettingMetadata } from "./settingmetadata";
/**
 * What fields to match in the filter
 */
export declare enum ReceiverJurisdictionalFiltersMatchFieldsEnum {
    FacilityOrPatientAddress = "FACILITY_OR_PATIENT_ADDRESS",
    FacilityAddress = "FACILITY_ADDRESS",
    FacilityName = "FACILITY_NAME",
    AbnormalValue = "ABNORMAL_VALUE"
}
/**
 * A single filter
 */
export declare class ReceiverJurisdictionalFilters extends SpeakeasyBase {
    /**
     * Ensure that the result does not match
     */
    doesNotMatch?: boolean;
    /**
     * What fields to match in the filter
     */
    matchFields?: ReceiverJurisdictionalFiltersMatchFieldsEnum;
    /**
     * What is the value to match against
     */
    matchValues?: string[];
}
/**
 * How often send a report
 */
export declare enum ReceiverTimingFrequencyEnum {
    RealTime = "REAL_TIME",
    Hourly = "HOURLY",
    Daily = "DAILY"
}
/**
 * When the report is sent if not immediately
 */
export declare class ReceiverTiming extends SpeakeasyBase {
    /**
     * The UTC hour to send a daily batch
     */
    dailyAt?: number;
    /**
     * How often send a report
     */
    frequency: ReceiverTimingFrequencyEnum;
}
/**
 * A receiver of reports from the data hub
 */
export declare class ReceiverInput extends SpeakeasyBase {
    /**
     * Display ready description of the receiver
     */
    description: string;
    /**
     * What items to include in the report.
     */
    jurisdictionalFilters?: ReceiverJurisdictionalFilters[];
    /**
     * The unique name for the receiver. Should include the organization name as a prefix.
     */
    name: string;
    /**
     * When the report is sent if not immediately
     */
    timing: ReceiverTiming;
    /**
     * The topic of for this receiver. Must match the supported topics.
     */
    topic: string;
    /**
     * How the report is translated from the sender. A report can be sent in multiple ways.
     */
    translations?: any[];
}
/**
 * A receiver of reports from the data hub
 */
export declare class Receiver extends SpeakeasyBase {
    /**
     * Display ready description of the receiver
     */
    description: string;
    /**
     * What items to include in the report.
     */
    jurisdictionalFilters?: ReceiverJurisdictionalFilters[];
    /**
     * The metadata associated with an setting
     */
    meta?: SettingMetadata;
    /**
     * The unique name for the receiver. Should include the organization name as a prefix.
     */
    name: string;
    /**
     * The name of the organization that this receiver belongs to
     */
    organizationName?: string;
    /**
     * When the report is sent if not immediately
     */
    timing: ReceiverTiming;
    /**
     * The topic of for this receiver. Must match the supported topics.
     */
    topic: string;
    /**
     * How the report is translated from the sender. A report can be sent in multiple ways.
     */
    translations?: any[];
}
