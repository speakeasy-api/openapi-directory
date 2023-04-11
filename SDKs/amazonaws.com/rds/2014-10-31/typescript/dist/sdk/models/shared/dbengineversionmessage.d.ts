import { SpeakeasyBase } from "../../../internal/utils";
import { DBEngineVersionList } from "./dbengineversionlist";
/**
 * Contains the result of a successful invocation of the <code>DescribeDBEngineVersions</code> action.
 */
export declare class DBEngineVersionMessage extends SpeakeasyBase {
    dbEngineVersions?: DBEngineVersionList[];
    marker?: string;
}
