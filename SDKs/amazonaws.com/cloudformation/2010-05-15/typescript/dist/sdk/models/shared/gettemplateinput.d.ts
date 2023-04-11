import { SpeakeasyBase } from "../../../internal/utils";
import { TemplateStageEnum } from "./templatestageenum";
/**
 * The input for a <a>GetTemplate</a> action.
 */
export declare class GetTemplateInput extends SpeakeasyBase {
    changeSetName?: string;
    stackName?: string;
    templateStage?: TemplateStageEnum;
}
