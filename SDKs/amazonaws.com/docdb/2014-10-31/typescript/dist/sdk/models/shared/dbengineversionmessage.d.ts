import { SpeakeasyBase } from "../../../internal/utils";
import { DBEngineVersionList } from "./dbengineversionlist";
/**
 * Represents the output of <a>DescribeDBEngineVersions</a>.
 */
export declare class DBEngineVersionMessage extends SpeakeasyBase {
    dbEngineVersions?: DBEngineVersionList[];
    marker?: string;
}
