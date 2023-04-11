import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { WafAction } from "./wafaction";
export declare class CreateWebACLRequest extends SpeakeasyBase {
    changeToken: string;
    defaultAction: WafAction;
    metricName: string;
    name: string;
    tags?: Tag[];
}
