import { SpeakeasyBase } from "../../../internal/utils";
import { DbEngineVersionList } from "./dbengineversionlist";
/**
 *  Contains the result of a successful invocation of the <code>DescribeDBEngineVersions</code> action.
**/
export declare class DbEngineVersionMessage extends SpeakeasyBase {
    dbEngineVersions?: DbEngineVersionList[];
    marker?: string;
}
