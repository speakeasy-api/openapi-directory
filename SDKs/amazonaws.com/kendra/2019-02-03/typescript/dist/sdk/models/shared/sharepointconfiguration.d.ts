import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceToIndexFieldMapping } from "./datasourcetoindexfieldmapping";
import { DataSourceVpcConfiguration } from "./datasourcevpcconfiguration";
import { ProxyConfiguration } from "./proxyconfiguration";
import { S3Path } from "./s3path";
import { SharePointOnlineAuthenticationTypeEnum } from "./sharepointonlineauthenticationtypeenum";
import { SharePointVersionEnum } from "./sharepointversionenum";
/**
 * Provides the configuration information to connect to Microsoft SharePoint as your data source.
 */
export declare class SharePointConfiguration extends SpeakeasyBase {
    authenticationType?: SharePointOnlineAuthenticationTypeEnum;
    crawlAttachments?: boolean;
    disableLocalGroups?: boolean;
    documentTitleFieldName?: string;
    exclusionPatterns?: string[];
    fieldMappings?: DataSourceToIndexFieldMapping[];
    inclusionPatterns?: string[];
    proxyConfiguration?: ProxyConfiguration;
    secretArn: string;
    sharePointVersion: SharePointVersionEnum;
    sslCertificateS3Path?: S3Path;
    urls: string[];
    useChangeLog?: boolean;
    vpcConfiguration?: DataSourceVpcConfiguration;
}
