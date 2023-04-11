import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class UntagResourceRequest extends SpeakeasyBase {
    resourceArn: string;
    tags: Tag[];
}
