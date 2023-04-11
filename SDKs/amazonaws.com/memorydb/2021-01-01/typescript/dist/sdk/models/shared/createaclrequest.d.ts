import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateACLRequest extends SpeakeasyBase {
    aclName: string;
    tags?: Tag[];
    userNames?: string[];
}
