import { SpeakeasyBase } from "../../../internal/utils";
import { CharacterSet } from "./characterset";
import { SupportedCharacterSetsList } from "./supportedcharactersetslist";
export declare class DBEngineVersionList extends SpeakeasyBase {
    dbEngineDescription?: string;
    dbEngineVersionDescription?: string;
    dbParameterGroupFamily?: string;
    defaultCharacterSet?: CharacterSet;
    engine?: string;
    engineVersion?: string;
    supportedCharacterSets?: SupportedCharacterSetsList[];
}
