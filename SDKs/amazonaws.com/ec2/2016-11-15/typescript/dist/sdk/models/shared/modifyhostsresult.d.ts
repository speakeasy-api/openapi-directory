import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the error.
 */
export declare class ModifyHostsResultUnsuccessfulError extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * Information about items that were not successfully processed in a batch call.
 */
export declare class ModifyHostsResultUnsuccessful extends SpeakeasyBase {
    error?: ModifyHostsResultUnsuccessfulError;
    resourceId?: string;
}
/**
 * Success
 */
export declare class ModifyHostsResult extends SpeakeasyBase {
    successful?: string[];
    unsuccessful?: ModifyHostsResultUnsuccessful[];
}
