import { SpeakeasyBase } from "../../../internal/utils";
import { ImageErrorEnum } from "./imageerrorenum";
/**
 * A structure that contains the <code>Timestamp</code>, <code>Error</code>, and <code>ImageContent</code>.
 */
export declare class Image extends SpeakeasyBase {
    error?: ImageErrorEnum;
    imageContent?: string;
    timeStamp?: Date;
}
