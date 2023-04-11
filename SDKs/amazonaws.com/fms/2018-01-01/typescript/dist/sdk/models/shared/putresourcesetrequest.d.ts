import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceSet } from "./resourceset";
import { Tag } from "./tag";
export declare class PutResourceSetRequest extends SpeakeasyBase {
    resourceSet: ResourceSet;
    tagList?: Tag[];
}
