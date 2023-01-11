import { SpeakeasyBase } from "../../../internal/utils";
import { Attachment } from "./attachment";
import { PerObjectStatus } from "./perobjectstatus";
export declare class SyncState extends SpeakeasyBase {
    attachment?: Attachment;
    config?: Record<string, PerObjectStatus>;
}
