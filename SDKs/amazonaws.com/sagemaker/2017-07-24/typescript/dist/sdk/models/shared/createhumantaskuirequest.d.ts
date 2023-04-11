import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { UiTemplate } from "./uitemplate";
export declare class CreateHumanTaskUiRequest extends SpeakeasyBase {
    humanTaskUiName: string;
    tags?: Tag[];
    /**
     * The Liquid template for the worker user interface.
     */
    uiTemplate: UiTemplate;
}
