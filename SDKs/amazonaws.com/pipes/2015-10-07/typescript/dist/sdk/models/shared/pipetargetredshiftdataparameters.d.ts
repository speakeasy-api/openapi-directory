import { SpeakeasyBase } from "../../../internal/utils";
/**
 * These are custom parameters to be used when the target is a Amazon Redshift cluster to invoke the Amazon Redshift Data API ExecuteStatement.
 */
export declare class PipeTargetRedshiftDataParameters extends SpeakeasyBase {
    database: string;
    dbUser?: string;
    secretManagerArn?: string;
    sqls: string[];
    statementName?: string;
    withEvent?: boolean;
}
