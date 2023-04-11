import { SpeakeasyBase } from "../../../internal/utils";
import { UpsertRedshiftTargetOptions } from "./upsertredshifttargetoptions";
/**
 * Specifies a target that uses Amazon Redshift.
 */
export declare class RedshiftTarget extends SpeakeasyBase {
    database: string;
    inputs: string[];
    name: string;
    redshiftTmpDir?: string;
    table: string;
    tmpDirIAMRole?: string;
    upsertRedshiftOptions?: UpsertRedshiftTargetOptions;
}
