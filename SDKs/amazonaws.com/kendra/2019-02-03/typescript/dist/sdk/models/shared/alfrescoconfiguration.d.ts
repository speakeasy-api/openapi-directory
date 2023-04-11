import { SpeakeasyBase } from "../../../internal/utils";
import { AlfrescoEntityEnum } from "./alfrescoentityenum";
import { DataSourceToIndexFieldMapping } from "./datasourcetoindexfieldmapping";
import { DataSourceVpcConfiguration } from "./datasourcevpcconfiguration";
import { S3Path } from "./s3path";
/**
 * <p>Provides the configuration information to connect to Alfresco as your data source.</p> <note> <p>Alfresco data source connector is currently in preview mode. Basic authentication is currently supported. If you would like to use Alfresco connector in production, contact <a href="http://aws.amazon.com/contact-us/">Support</a>.</p> </note>
 */
export declare class AlfrescoConfiguration extends SpeakeasyBase {
    blogFieldMappings?: DataSourceToIndexFieldMapping[];
    crawlComments?: boolean;
    crawlSystemFolders?: boolean;
    documentLibraryFieldMappings?: DataSourceToIndexFieldMapping[];
    entityFilter?: AlfrescoEntityEnum[];
    exclusionPatterns?: string[];
    inclusionPatterns?: string[];
    secretArn: string;
    siteId: string;
    siteUrl: string;
    sslCertificateS3Path: S3Path;
    vpcConfiguration?: DataSourceVpcConfiguration;
    wikiFieldMappings?: DataSourceToIndexFieldMapping[];
}
