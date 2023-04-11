import { SpeakeasyBase } from "../../../internal/utils";
import { RepositoryProviderEnum } from "./repositoryproviderenum";
import { TemplateTypeEnum } from "./templatetypeenum";
export declare class CreateTemplateSyncConfigInput extends SpeakeasyBase {
    branch: string;
    repositoryName: string;
    repositoryProvider: RepositoryProviderEnum;
    subdirectory?: string;
    templateName: string;
    templateType: TemplateTypeEnum;
}
