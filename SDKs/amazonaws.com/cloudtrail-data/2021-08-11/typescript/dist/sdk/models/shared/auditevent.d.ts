import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An event from a source outside of Amazon Web Services that you want CloudTrail to log.
 */
export declare class AuditEvent extends SpeakeasyBase {
    eventData: string;
    eventDataChecksum?: string;
    id: string;
}
