import { SpeakeasyBase } from "../../../internal/utils";
import { TemplateStageEnum } from "./templatestageenum";
/**
 * The output for <a>GetTemplate</a> action.
 */
export declare class GetTemplateOutput extends SpeakeasyBase {
    stagesAvailable?: TemplateStageEnum[];
    templateBody?: string;
}
