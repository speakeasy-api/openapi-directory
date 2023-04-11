import { SpeakeasyBase } from "../../../internal/utils";
import { AutomaticTransitionInfo } from "./automatictransitioninfo";
import { AutomaticTransitionInfoListLinks } from "./automatictransitioninfolistlinks";
/**
 * Successfully fetched list of configured automatic Order status transitions
 */
export declare class AutomaticTransitionInfoList extends SpeakeasyBase {
    automaticTransitionInfos?: AutomaticTransitionInfo[];
    links: AutomaticTransitionInfoListLinks;
}
