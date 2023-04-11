import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The reason why the web data was not provided. Possible value: **noOnlinePresence**.
 */
export declare enum WebDataExemptionReasonEnum {
    NoOnlinePresence = "noOnlinePresence"
}
export declare class WebDataExemption extends SpeakeasyBase {
    /**
     * The reason why the web data was not provided. Possible value: **noOnlinePresence**.
     */
    reason?: WebDataExemptionReasonEnum;
}
