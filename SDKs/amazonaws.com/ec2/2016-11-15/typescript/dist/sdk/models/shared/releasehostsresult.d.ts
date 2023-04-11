import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the error.
 */
export declare class ReleaseHostsResultUnsuccessfulError extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * Information about items that were not successfully processed in a batch call.
 */
export declare class ReleaseHostsResultUnsuccessful extends SpeakeasyBase {
    error?: ReleaseHostsResultUnsuccessfulError;
    resourceId?: string;
}
/**
 * Success
 */
export declare class ReleaseHostsResult extends SpeakeasyBase {
    successful?: string[];
    unsuccessful?: ReleaseHostsResultUnsuccessful[];
}
