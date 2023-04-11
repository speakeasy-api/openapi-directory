import { SpeakeasyBase } from "../../../internal/utils";
import { InAppMessageContent } from "./inappmessagecontent";
import { LayoutEnum } from "./layoutenum";
/**
 * Provides all fields required for building an in-app message.
 */
export declare class InAppMessage extends SpeakeasyBase {
    content?: InAppMessageContent[];
    customConfig?: Record<string, string>;
    layout?: LayoutEnum;
}
