import { SpeakeasyBase } from "../../../internal/utils";
import { LayoutSections } from "./layoutsections";
/**
 * Content specific to <code>BasicLayout</code> type. It configures fields in the top panel and More Info tab of agent application.
 */
export declare class BasicLayout extends SpeakeasyBase {
    moreInfo?: LayoutSections;
    topPanel?: LayoutSections;
}
