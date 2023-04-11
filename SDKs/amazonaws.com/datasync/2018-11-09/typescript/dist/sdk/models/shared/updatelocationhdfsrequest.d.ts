import { SpeakeasyBase } from "../../../internal/utils";
import { HdfsAuthenticationTypeEnum } from "./hdfsauthenticationtypeenum";
import { HdfsNameNode } from "./hdfsnamenode";
import { QopConfiguration } from "./qopconfiguration";
export declare class UpdateLocationHdfsRequest extends SpeakeasyBase {
    agentArns?: string[];
    authenticationType?: HdfsAuthenticationTypeEnum;
    blockSize?: number;
    kerberosKeytab?: string;
    kerberosKrb5Conf?: string;
    kerberosPrincipal?: string;
    kmsKeyProviderUri?: string;
    locationArn: string;
    nameNodes?: HdfsNameNode[];
    qopConfiguration?: QopConfiguration;
    replicationFactor?: number;
    simpleUser?: string;
    subdirectory?: string;
}
