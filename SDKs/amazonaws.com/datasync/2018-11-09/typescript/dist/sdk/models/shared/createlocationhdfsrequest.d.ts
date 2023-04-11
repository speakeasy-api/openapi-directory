import { SpeakeasyBase } from "../../../internal/utils";
import { HdfsAuthenticationTypeEnum } from "./hdfsauthenticationtypeenum";
import { HdfsNameNode } from "./hdfsnamenode";
import { QopConfiguration } from "./qopconfiguration";
import { TagListEntry } from "./taglistentry";
export declare class CreateLocationHdfsRequest extends SpeakeasyBase {
    agentArns: string[];
    authenticationType: HdfsAuthenticationTypeEnum;
    blockSize?: number;
    kerberosKeytab?: string;
    kerberosKrb5Conf?: string;
    kerberosPrincipal?: string;
    kmsKeyProviderUri?: string;
    nameNodes: HdfsNameNode[];
    qopConfiguration?: QopConfiguration;
    replicationFactor?: number;
    simpleUser?: string;
    subdirectory?: string;
    tags?: TagListEntry[];
}
