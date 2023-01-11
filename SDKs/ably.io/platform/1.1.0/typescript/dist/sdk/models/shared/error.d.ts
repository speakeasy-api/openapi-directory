import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Returned error from failed REST.
**/
export declare class ErrorT extends SpeakeasyBase {
    code?: number;
    href?: string;
    message?: string;
    serverId?: string;
    statusCode?: number;
}
