import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a volume status operation code.
 */
export declare class DescribeVolumeStatusResultVolumeStatusesActions extends SpeakeasyBase {
    code?: string;
    description?: string;
    eventId?: string;
    eventType?: string;
}
/**
 * Information about the instances to which the volume is attached.
 */
export declare class DescribeVolumeStatusResultVolumeStatusesAttachmentStatuses extends SpeakeasyBase {
    instanceId?: string;
    ioPerformance?: string;
}
/**
 * Describes a volume status event.
 */
export declare class DescribeVolumeStatusResultVolumeStatusesEvents extends SpeakeasyBase {
    description?: string;
    eventId?: string;
    eventType?: string;
    instanceId?: string;
    notAfter?: Date;
    notBefore?: Date;
}
/**
 * The name of the volume status.
 */
export declare enum DescribeVolumeStatusResultVolumeStatusesVolumeStatusDetailsNameEnum {
    IoEnabled = "io-enabled",
    IoPerformance = "io-performance"
}
/**
 * Describes a volume status.
 */
export declare class DescribeVolumeStatusResultVolumeStatusesVolumeStatusDetails extends SpeakeasyBase {
    name?: DescribeVolumeStatusResultVolumeStatusesVolumeStatusDetailsNameEnum;
    status?: string;
}
/**
 * The status of the volume.
 */
export declare enum DescribeVolumeStatusResultVolumeStatusesVolumeStatusStatusEnum {
    Ok = "ok",
    Impaired = "impaired",
    InsufficientData = "insufficient-data"
}
/**
 * The volume status.
 */
export declare class DescribeVolumeStatusResultVolumeStatusesVolumeStatus extends SpeakeasyBase {
    details?: DescribeVolumeStatusResultVolumeStatusesVolumeStatusDetails[];
    status?: DescribeVolumeStatusResultVolumeStatusesVolumeStatusStatusEnum;
}
/**
 * Describes the volume status.
 */
export declare class DescribeVolumeStatusResultVolumeStatuses extends SpeakeasyBase {
    actions?: DescribeVolumeStatusResultVolumeStatusesActions[];
    attachmentStatuses?: DescribeVolumeStatusResultVolumeStatusesAttachmentStatuses[];
    availabilityZone?: string;
    events?: DescribeVolumeStatusResultVolumeStatusesEvents[];
    outpostArn?: string;
    volumeId?: string;
    volumeStatus?: DescribeVolumeStatusResultVolumeStatusesVolumeStatus;
}
/**
 * Success
 */
export declare class DescribeVolumeStatusResult extends SpeakeasyBase {
    nextToken?: string;
    volumeStatuses?: DescribeVolumeStatusResultVolumeStatuses[];
}
