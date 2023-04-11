import { SpeakeasyBase } from "../../../internal/utils";
import { DeletableItemList } from "./deletableitemlist";
export declare class BatchDeleteAttributesRequest extends SpeakeasyBase {
    domainName: string;
    items: DeletableItemList[];
}
