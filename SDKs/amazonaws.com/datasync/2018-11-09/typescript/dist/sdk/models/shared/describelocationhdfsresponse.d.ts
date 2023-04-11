import { SpeakeasyBase } from "../../../internal/utils";
import { HdfsAuthenticationTypeEnum } from "./hdfsauthenticationtypeenum";
import { HdfsNameNode } from "./hdfsnamenode";
import { QopConfiguration } from "./qopconfiguration";
/**
 * Success
 */
export declare class DescribeLocationHdfsResponse extends SpeakeasyBase {
    agentArns?: string[];
    authenticationType?: HdfsAuthenticationTypeEnum;
    blockSize?: number;
    creationTime?: Date;
    kerberosPrincipal?: string;
    kmsKeyProviderUri?: string;
    locationArn?: string;
    locationUri?: string;
    nameNodes?: HdfsNameNode[];
    qopConfiguration?: QopConfiguration;
    replicationFactor?: number;
    simpleUser?: string;
}
