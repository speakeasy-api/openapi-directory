import { SpeakeasyBase } from "../../../internal/utils";
import { SourceSchema } from "./sourceschema";
/**
 * Success
 */
export declare class DiscoverInputSchemaResponse extends SpeakeasyBase {
    inputSchema?: SourceSchema;
    parsedInputRecords?: string[][];
    processedInputRecords?: string[];
    rawInputRecords?: string[];
}
