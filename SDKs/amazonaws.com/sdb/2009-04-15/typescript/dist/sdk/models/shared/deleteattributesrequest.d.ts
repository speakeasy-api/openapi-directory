import { SpeakeasyBase } from "../../../internal/utils";
import { DeletableAttributeList } from "./deletableattributelist";
import { UpdateCondition } from "./updatecondition";
export declare class DeleteAttributesRequest extends SpeakeasyBase {
    attributes?: DeletableAttributeList[];
    domainName: string;
    expected?: UpdateCondition;
    itemName: string;
}
