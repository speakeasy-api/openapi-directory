import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationVersionLifecycleEnum } from "./applicationversionlifecycleenum";
/**
 * Defines an application version summary.
 */
export declare class ApplicationVersionSummary extends SpeakeasyBase {
    applicationVersion: number;
    creationTime: Date;
    status: ApplicationVersionLifecycleEnum;
    statusReason?: string;
}
