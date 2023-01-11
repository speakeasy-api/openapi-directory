import { SpeakeasyBase } from "../../../internal/utils";
import { DbEngineVersionList } from "./dbengineversionlist";
/**
 * Represents the output of <a>DescribeDBEngineVersions</a>.
**/
export declare class DbEngineVersionMessage extends SpeakeasyBase {
    dbEngineVersions?: DbEngineVersionList[];
    marker?: string;
}
