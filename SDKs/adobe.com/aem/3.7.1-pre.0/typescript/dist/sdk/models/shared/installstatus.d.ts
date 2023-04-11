import { SpeakeasyBase } from "../../../internal/utils";
export declare class InstallStatusStatus extends SpeakeasyBase {
    finished?: boolean;
    itemCount?: number;
}
/**
 * Retrieved CRX package manager install status
 */
export declare class InstallStatus extends SpeakeasyBase {
    status?: InstallStatusStatus;
}
