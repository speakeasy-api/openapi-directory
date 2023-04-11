import { SpeakeasyBase } from "../../../internal/utils";
import { SqlParameter } from "./sqlparameter";
export declare class ExecuteStatementInput extends SpeakeasyBase {
    clientToken?: string;
    clusterIdentifier?: string;
    database: string;
    dbUser?: string;
    parameters?: SqlParameter[];
    secretArn?: string;
    sql: string;
    statementName?: string;
    withEvent?: boolean;
    workgroupName?: string;
}
