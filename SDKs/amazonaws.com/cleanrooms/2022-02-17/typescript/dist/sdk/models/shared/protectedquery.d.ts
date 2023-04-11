import { SpeakeasyBase } from "../../../internal/utils";
import { ProtectedQueryError } from "./protectedqueryerror";
import { ProtectedQueryResult } from "./protectedqueryresult";
import { ProtectedQueryResultConfiguration } from "./protectedqueryresultconfiguration";
import { ProtectedQuerySQLParameters } from "./protectedquerysqlparameters";
import { ProtectedQueryStatistics } from "./protectedquerystatistics";
import { ProtectedQueryStatusEnum } from "./protectedquerystatusenum";
/**
 * The parameters for an AWS Clean Rooms protected query.
 */
export declare class ProtectedQuery extends SpeakeasyBase {
    createTime: Date;
    error?: ProtectedQueryError;
    id: string;
    membershipArn: string;
    membershipId: string;
    result?: ProtectedQueryResult;
    resultConfiguration: ProtectedQueryResultConfiguration;
    sqlParameters: ProtectedQuerySQLParameters;
    statistics?: ProtectedQueryStatistics;
    status: ProtectedQueryStatusEnum;
}
