import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
export declare class CreateOptionGroupMessage extends SpeakeasyBase {
    engineName: string;
    majorEngineVersion: string;
    optionGroupDescription: string;
    optionGroupName: string;
    tags?: TagList[];
}
