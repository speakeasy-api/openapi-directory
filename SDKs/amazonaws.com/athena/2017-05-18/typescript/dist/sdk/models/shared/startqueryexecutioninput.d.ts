import { SpeakeasyBase } from "../../../internal/utils";
import { QueryExecutionContext } from "./queryexecutioncontext";
import { ResultConfiguration } from "./resultconfiguration";
import { ResultReuseConfiguration } from "./resultreuseconfiguration";
export declare class StartQueryExecutionInput extends SpeakeasyBase {
    clientRequestToken?: string;
    executionParameters?: string[];
    queryExecutionContext?: QueryExecutionContext;
    queryString: string;
    resultConfiguration?: ResultConfiguration;
    resultReuseConfiguration?: ResultReuseConfiguration;
    workGroup?: string;
}
