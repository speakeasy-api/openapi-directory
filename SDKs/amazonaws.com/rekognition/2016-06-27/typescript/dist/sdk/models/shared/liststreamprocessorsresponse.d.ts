import { SpeakeasyBase } from "../../../internal/utils";
import { StreamProcessor } from "./streamprocessor";
/**
 * Success
 */
export declare class ListStreamProcessorsResponse extends SpeakeasyBase {
    nextToken?: string;
    streamProcessors?: StreamProcessor[];
}
