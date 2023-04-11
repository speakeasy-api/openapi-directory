import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies an Amazon Redshift data store.
 */
export declare class RedshiftSource extends SpeakeasyBase {
    database: string;
    name: string;
    redshiftTmpDir?: string;
    table: string;
    tmpDirIAMRole?: string;
}
