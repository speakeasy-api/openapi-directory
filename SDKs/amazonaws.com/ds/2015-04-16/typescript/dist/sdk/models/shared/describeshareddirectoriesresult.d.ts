import { SpeakeasyBase } from "../../../internal/utils";
import { SharedDirectory } from "./shareddirectory";
/**
 * Success
 */
export declare class DescribeSharedDirectoriesResult extends SpeakeasyBase {
    nextToken?: string;
    sharedDirectories?: SharedDirectory[];
}
