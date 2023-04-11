import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentTemplateVersionSummary } from "./environmenttemplateversionsummary";
/**
 * Success
 */
export declare class ListEnvironmentTemplateVersionsOutput extends SpeakeasyBase {
    nextToken?: string;
    templateVersions: EnvironmentTemplateVersionSummary[];
}
