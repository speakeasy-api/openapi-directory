import { SpeakeasyBase } from "../../../internal/utils";
import { BackTestConfiguration } from "./backtestconfiguration";
/**
 * Details about an Amazon Athena datasource.
 */
export declare class AthenaSourceConfig extends SpeakeasyBase {
    backTestConfiguration?: BackTestConfiguration;
    dataCatalog?: string;
    databaseName?: string;
    roleArn?: string;
    s3ResultsPath?: string;
    tableName?: string;
    workGroupName?: string;
}
