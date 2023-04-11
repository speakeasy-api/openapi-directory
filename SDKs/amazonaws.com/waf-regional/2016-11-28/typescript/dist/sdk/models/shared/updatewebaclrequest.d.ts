import { SpeakeasyBase } from "../../../internal/utils";
import { WafAction } from "./wafaction";
import { WebACLUpdate } from "./webaclupdate";
export declare class UpdateWebACLRequest extends SpeakeasyBase {
    changeToken: string;
    defaultAction?: WafAction;
    updates?: WebACLUpdate[];
    webACLId: string;
}
