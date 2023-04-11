import { SpeakeasyBase } from "../../../internal/utils";
import { IOUsage } from "./iousage";
import { Page } from "./page";
import { TimingInformation } from "./timinginformation";
/**
 * Contains the page that was fetched.
 */
export declare class FetchPageResult extends SpeakeasyBase {
    consumedIOs?: IOUsage;
    page?: Page;
    timingInformation?: TimingInformation;
}
