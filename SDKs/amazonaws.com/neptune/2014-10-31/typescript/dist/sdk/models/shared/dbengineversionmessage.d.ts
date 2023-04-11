import { SpeakeasyBase } from "../../../internal/utils";
import { DBEngineVersionList } from "./dbengineversionlist";
/**
 * Success
 */
export declare class DBEngineVersionMessage extends SpeakeasyBase {
    dbEngineVersions?: DBEngineVersionList[];
    marker?: string;
}
