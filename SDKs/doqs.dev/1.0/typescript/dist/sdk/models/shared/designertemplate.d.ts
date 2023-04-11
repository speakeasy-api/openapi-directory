import { SpeakeasyBase } from "../../../internal/utils";
import { FormatEnum } from "./formatenum";
import { OrientationEnum } from "./orientationenum";
export declare class DesignerTemplate extends SpeakeasyBase {
    components: Record<string, any>[];
    createdAt?: Date;
    css: string;
    footerHtml?: string;
    /**
     * An enumeration.
     */
    format: FormatEnum;
    headerHtml?: string;
    id?: string;
    name: string;
    /**
     * An enumeration.
     */
    orientation: OrientationEnum;
    previewPayload: Record<string, any>;
    templateHtml: string;
}
