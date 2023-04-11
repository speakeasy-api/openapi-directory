import { SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZoneDetail } from "./availabilityzonedetail";
import { ErrorRootCause } from "./errorrootcause";
import { FaultRootCause } from "./faultrootcause";
import { Http } from "./http";
import { InstanceIdDetail } from "./instanceiddetail";
import { ResourceARNDetail } from "./resourcearndetail";
import { ResponseTimeRootCause } from "./responsetimerootcause";
import { ServiceId } from "./serviceid";
import { TraceUser } from "./traceuser";
import { ValueWithServiceIds } from "./valuewithserviceids";
/**
 * Metadata generated from the segment documents in a trace.
 */
export declare class TraceSummary extends SpeakeasyBase {
    annotations?: Record<string, ValueWithServiceIds[]>;
    availabilityZones?: AvailabilityZoneDetail[];
    duration?: number;
    entryPoint?: ServiceId;
    errorRootCauses?: ErrorRootCause[];
    faultRootCauses?: FaultRootCause[];
    hasError?: boolean;
    hasFault?: boolean;
    hasThrottle?: boolean;
    http?: Http;
    id?: string;
    instanceIds?: InstanceIdDetail[];
    isPartial?: boolean;
    matchedEventTime?: Date;
    resourceARNs?: ResourceARNDetail[];
    responseTime?: number;
    responseTimeRootCauses?: ResponseTimeRootCause[];
    revision?: number;
    serviceIds?: ServiceId[];
    users?: TraceUser[];
}
