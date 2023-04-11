import { SpeakeasyBase } from "../../../internal/utils";
import { AppTypeEnum } from "./apptypeenum";
import { DataSource } from "./datasource";
import { EnvironmentVariable } from "./environmentvariable";
import { Source } from "./source";
import { SslConfiguration } from "./sslconfiguration";
export declare class UpdateAppRequest extends SpeakeasyBase {
    appId: string;
    appSource?: Source;
    attributes?: Record<string, string>;
    dataSources?: DataSource[];
    description?: string;
    domains?: string[];
    enableSsl?: boolean;
    environment?: EnvironmentVariable[];
    name?: string;
    sslConfiguration?: SslConfiguration;
    type?: AppTypeEnum;
}
