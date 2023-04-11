import { SpeakeasyBase } from "../../../internal/utils";
import { RepositoryProviderEnum } from "./repositoryproviderenum";
import { TemplateTypeEnum } from "./templatetypeenum";
/**
 * The detail data for a template sync configuration.
 */
export declare class TemplateSyncConfig extends SpeakeasyBase {
    branch: string;
    repositoryName: string;
    repositoryProvider: RepositoryProviderEnum;
    subdirectory?: string;
    templateName: string;
    templateType: TemplateTypeEnum;
}
