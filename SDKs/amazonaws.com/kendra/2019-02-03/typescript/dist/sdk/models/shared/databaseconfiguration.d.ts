import { SpeakeasyBase } from "../../../internal/utils";
import { AclConfiguration } from "./aclconfiguration";
import { ColumnConfiguration } from "./columnconfiguration";
import { ConnectionConfiguration } from "./connectionconfiguration";
import { DatabaseEngineTypeEnum } from "./databaseenginetypeenum";
import { DataSourceVpcConfiguration } from "./datasourcevpcconfiguration";
import { SqlConfiguration } from "./sqlconfiguration";
/**
 * Provides the configuration information to connect to a index.
 */
export declare class DatabaseConfiguration extends SpeakeasyBase {
    aclConfiguration?: AclConfiguration;
    columnConfiguration: ColumnConfiguration;
    connectionConfiguration: ConnectionConfiguration;
    databaseEngineType: DatabaseEngineTypeEnum;
    sqlConfiguration?: SqlConfiguration;
    /**
     * Provides the configuration information to connect to an Amazon VPC.
     */
    vpcConfiguration?: DataSourceVpcConfiguration;
}
