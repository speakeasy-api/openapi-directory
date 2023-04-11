import { SpeakeasyBase } from "../../../internal/utils";
import { CustomDocumentEnrichmentConfiguration } from "./customdocumentenrichmentconfiguration";
import { DataSourceConfiguration } from "./datasourceconfiguration";
import { DataSourceVpcConfiguration } from "./datasourcevpcconfiguration";
export declare class UpdateDataSourceRequest extends SpeakeasyBase {
    configuration?: DataSourceConfiguration;
    customDocumentEnrichmentConfiguration?: CustomDocumentEnrichmentConfiguration;
    description?: string;
    id: string;
    indexId: string;
    languageCode?: string;
    name?: string;
    roleArn?: string;
    schedule?: string;
    vpcConfiguration?: DataSourceVpcConfiguration;
}
