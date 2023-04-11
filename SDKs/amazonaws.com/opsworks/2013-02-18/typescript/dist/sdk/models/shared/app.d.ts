import { SpeakeasyBase } from "../../../internal/utils";
import { AppTypeEnum } from "./apptypeenum";
import { DataSource } from "./datasource";
import { EnvironmentVariable } from "./environmentvariable";
import { Source } from "./source";
import { SslConfiguration } from "./sslconfiguration";
/**
 * A description of the app.
 */
export declare class App extends SpeakeasyBase {
    appId?: string;
    appSource?: Source;
    attributes?: Record<string, string>;
    createdAt?: string;
    dataSources?: DataSource[];
    description?: string;
    domains?: string[];
    enableSsl?: boolean;
    environment?: EnvironmentVariable[];
    name?: string;
    shortname?: string;
    sslConfiguration?: SslConfiguration;
    stackId?: string;
    type?: AppTypeEnum;
}
