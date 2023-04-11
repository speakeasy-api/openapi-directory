import { SpeakeasyBase } from "../../../internal/utils";
import { AndroidApp } from "./androidapp";
/**
 * OK - the request has succeeded.
 */
export declare class AndroidAppsResponse extends SpeakeasyBase {
    /**
     * Apps uploaded for Android payment terminals.
     */
    data?: AndroidApp[];
}
