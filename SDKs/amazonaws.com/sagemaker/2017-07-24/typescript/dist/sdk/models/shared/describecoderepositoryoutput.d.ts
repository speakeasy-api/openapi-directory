import { SpeakeasyBase } from "../../../internal/utils";
import { GitConfig } from "./gitconfig";
/**
 * Success
 */
export declare class DescribeCodeRepositoryOutput extends SpeakeasyBase {
    codeRepositoryArn: string;
    codeRepositoryName: string;
    creationTime: Date;
    gitConfig?: GitConfig;
    lastModifiedTime: Date;
}
