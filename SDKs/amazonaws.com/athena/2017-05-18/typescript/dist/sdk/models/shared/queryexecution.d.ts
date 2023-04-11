import { SpeakeasyBase } from "../../../internal/utils";
import { EngineVersion } from "./engineversion";
import { QueryExecutionContext } from "./queryexecutioncontext";
import { QueryExecutionStatistics } from "./queryexecutionstatistics";
import { QueryExecutionStatus } from "./queryexecutionstatus";
import { ResultConfiguration } from "./resultconfiguration";
import { ResultReuseConfiguration } from "./resultreuseconfiguration";
import { StatementTypeEnum } from "./statementtypeenum";
/**
 * Information about a single instance of a query execution.
 */
export declare class QueryExecution extends SpeakeasyBase {
    engineVersion?: EngineVersion;
    executionParameters?: string[];
    query?: string;
    queryExecutionContext?: QueryExecutionContext;
    queryExecutionId?: string;
    resultConfiguration?: ResultConfiguration;
    resultReuseConfiguration?: ResultReuseConfiguration;
    statementType?: StatementTypeEnum;
    statistics?: QueryExecutionStatistics;
    status?: QueryExecutionStatus;
    substatementType?: string;
    workGroup?: string;
}
