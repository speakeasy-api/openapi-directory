import { SpeakeasyBase } from "../../../internal/utils";
import { IndexAttachment } from "./indexattachment";
/**
 * Success
 */
export declare class ListIndexResponse extends SpeakeasyBase {
    indexAttachments?: IndexAttachment[];
    nextToken?: string;
}
