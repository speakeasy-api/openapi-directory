import { SpeakeasyBase } from "../../../internal/utils";
import { Item } from "./item";
/**
 * Success
 */
export declare class GetTranscriptResponse extends SpeakeasyBase {
    initialContactId?: string;
    nextToken?: string;
    transcript?: Item[];
}
