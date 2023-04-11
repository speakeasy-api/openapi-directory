import { SpeakeasyBase } from "../../../internal/utils";
import { ConfluenceAttachmentConfiguration } from "./confluenceattachmentconfiguration";
import { ConfluenceAuthenticationTypeEnum } from "./confluenceauthenticationtypeenum";
import { ConfluenceBlogConfiguration } from "./confluenceblogconfiguration";
import { ConfluencePageConfiguration } from "./confluencepageconfiguration";
import { ConfluenceSpaceConfiguration } from "./confluencespaceconfiguration";
import { ConfluenceVersionEnum } from "./confluenceversionenum";
import { DataSourceVpcConfiguration } from "./datasourcevpcconfiguration";
import { ProxyConfiguration } from "./proxyconfiguration";
/**
 * Provides the configuration information to connect to Confluence as your data source.
 */
export declare class ConfluenceConfiguration extends SpeakeasyBase {
    attachmentConfiguration?: ConfluenceAttachmentConfiguration;
    authenticationType?: ConfluenceAuthenticationTypeEnum;
    blogConfiguration?: ConfluenceBlogConfiguration;
    exclusionPatterns?: string[];
    inclusionPatterns?: string[];
    pageConfiguration?: ConfluencePageConfiguration;
    proxyConfiguration?: ProxyConfiguration;
    secretArn: string;
    serverUrl: string;
    spaceConfiguration?: ConfluenceSpaceConfiguration;
    version: ConfluenceVersionEnum;
    vpcConfiguration?: DataSourceVpcConfiguration;
}
