import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceToIndexFieldMapping } from "./datasourcetoindexfieldmapping";
import { DataSourceVpcConfiguration } from "./datasourcevpcconfiguration";
import { IssueSubEntityEnum } from "./issuesubentityenum";
/**
 * Provides the configuration information to connect to Jira as your data source.
 */
export declare class JiraConfiguration extends SpeakeasyBase {
    attachmentFieldMappings?: DataSourceToIndexFieldMapping[];
    commentFieldMappings?: DataSourceToIndexFieldMapping[];
    exclusionPatterns?: string[];
    inclusionPatterns?: string[];
    issueFieldMappings?: DataSourceToIndexFieldMapping[];
    issueSubEntityFilter?: IssueSubEntityEnum[];
    issueType?: string[];
    jiraAccountUrl: string;
    project?: string[];
    projectFieldMappings?: DataSourceToIndexFieldMapping[];
    secretArn: string;
    status?: string[];
    useChangeLog?: boolean;
    vpcConfiguration?: DataSourceVpcConfiguration;
    workLogFieldMappings?: DataSourceToIndexFieldMapping[];
}
