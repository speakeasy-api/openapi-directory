import { SpeakeasyBase } from "../../../internal/utils";
import { FormatEnum } from "./formatenum";
/**
 * A field-level encryption content type profile.
**/
export declare class ContentTypeProfileList extends SpeakeasyBase {
    contentType: string;
    format: FormatEnum;
    profileId?: string;
}
