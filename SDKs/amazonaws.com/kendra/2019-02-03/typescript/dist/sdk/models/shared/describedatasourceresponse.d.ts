import { SpeakeasyBase } from "../../../internal/utils";
import { CustomDocumentEnrichmentConfiguration } from "./customdocumentenrichmentconfiguration";
import { DataSourceConfiguration } from "./datasourceconfiguration";
import { DataSourceStatusEnum } from "./datasourcestatusenum";
import { DataSourceTypeEnum } from "./datasourcetypeenum";
import { DataSourceVpcConfiguration } from "./datasourcevpcconfiguration";
/**
 * Success
 */
export declare class DescribeDataSourceResponse extends SpeakeasyBase {
    configuration?: DataSourceConfiguration;
    createdAt?: Date;
    customDocumentEnrichmentConfiguration?: CustomDocumentEnrichmentConfiguration;
    description?: string;
    errorMessage?: string;
    id?: string;
    indexId?: string;
    languageCode?: string;
    name?: string;
    roleArn?: string;
    schedule?: string;
    status?: DataSourceStatusEnum;
    type?: DataSourceTypeEnum;
    updatedAt?: Date;
    vpcConfiguration?: DataSourceVpcConfiguration;
}
