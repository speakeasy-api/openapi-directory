import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class TagResourceRequest extends SpeakeasyBase {
    resourceARN: string;
    tags: Tag[];
}
