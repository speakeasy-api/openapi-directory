import { SpeakeasyBase } from "../../../internal/utils";
import { ReplaceableAttributeList } from "./replaceableattributelist";
import { UpdateCondition } from "./updatecondition";
export declare class PutAttributesRequest extends SpeakeasyBase {
    attributes: ReplaceableAttributeList[];
    domainName: string;
    expected?: UpdateCondition;
    itemName: string;
}
