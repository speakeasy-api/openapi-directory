import { SpeakeasyBase } from "../../../internal/utils";
import { FormatEnum } from "./formatenum";
import { OrientationEnum } from "./orientationenum";
export declare class CreateOrUpdateTemplateRequest extends SpeakeasyBase {
    components: Record<string, any>[];
    css: string;
    footerHtml?: string;
    /**
     * An enumeration.
     */
    format: FormatEnum;
    headerHtml?: string;
    name: string;
    /**
     * An enumeration.
     */
    orientation: OrientationEnum;
    previewPayload: Record<string, any>;
    templateHtml: string;
}
