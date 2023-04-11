import { SpeakeasyBase } from "../../../internal/utils";
import { LayoutContent } from "./layoutcontent";
/**
 * Success
 */
export declare class GetLayoutResponse extends SpeakeasyBase {
    content: LayoutContent;
    layoutArn: string;
    layoutId: string;
    name: string;
    tags?: Record<string, string>;
}
