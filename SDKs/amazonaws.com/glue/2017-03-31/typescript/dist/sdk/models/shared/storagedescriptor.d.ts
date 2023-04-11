import { SpeakeasyBase } from "../../../internal/utils";
import { Column } from "./column";
import { Order } from "./order";
import { SchemaReference } from "./schemareference";
import { SerDeInfo } from "./serdeinfo";
import { SkewedInfo } from "./skewedinfo";
/**
 * Describes the physical storage of table data.
 */
export declare class StorageDescriptor extends SpeakeasyBase {
    additionalLocations?: string[];
    bucketColumns?: string[];
    columns?: Column[];
    compressed?: boolean;
    inputFormat?: string;
    location?: string;
    numberOfBuckets?: number;
    outputFormat?: string;
    parameters?: Record<string, string>;
    schemaReference?: SchemaReference;
    serdeInfo?: SerDeInfo;
    skewedInfo?: SkewedInfo;
    sortColumns?: Order[];
    storedAsSubDirectories?: boolean;
}
