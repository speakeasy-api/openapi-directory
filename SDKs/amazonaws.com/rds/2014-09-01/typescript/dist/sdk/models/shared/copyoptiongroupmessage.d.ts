import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
export declare class CopyOptionGroupMessage extends SpeakeasyBase {
    sourceOptionGroupIdentifier: string;
    tags?: TagList[];
    targetOptionGroupDescription: string;
    targetOptionGroupIdentifier: string;
}
