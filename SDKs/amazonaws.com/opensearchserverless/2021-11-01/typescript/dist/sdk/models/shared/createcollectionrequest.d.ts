import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionTypeEnum } from "./collectiontypeenum";
import { Tag } from "./tag";
export declare class CreateCollectionRequest extends SpeakeasyBase {
    clientToken?: string;
    description?: string;
    name: string;
    tags?: Tag[];
    type?: CollectionTypeEnum;
}
