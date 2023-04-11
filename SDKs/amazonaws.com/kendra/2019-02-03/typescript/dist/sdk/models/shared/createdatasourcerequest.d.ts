import { SpeakeasyBase } from "../../../internal/utils";
import { CustomDocumentEnrichmentConfiguration } from "./customdocumentenrichmentconfiguration";
import { DataSourceConfiguration } from "./datasourceconfiguration";
import { DataSourceTypeEnum } from "./datasourcetypeenum";
import { DataSourceVpcConfiguration } from "./datasourcevpcconfiguration";
import { Tag } from "./tag";
export declare class CreateDataSourceRequest extends SpeakeasyBase {
    clientToken?: string;
    configuration?: DataSourceConfiguration;
    customDocumentEnrichmentConfiguration?: CustomDocumentEnrichmentConfiguration;
    description?: string;
    indexId: string;
    languageCode?: string;
    name: string;
    roleArn?: string;
    schedule?: string;
    tags?: Tag[];
    type: DataSourceTypeEnum;
    vpcConfiguration?: DataSourceVpcConfiguration;
}
