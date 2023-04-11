import { SpeakeasyBase } from "../../../internal/utils";
import { KeySchema } from "./keyschema";
import { ProvisionedThroughputDescription } from "./provisionedthroughputdescription";
import { TableStatusEnum } from "./tablestatusenum";
export declare class TableDescription extends SpeakeasyBase {
    creationDateTime?: Date;
    itemCount?: number;
    /**
     * The KeySchema identifies the primary key as a one attribute primary key (hash) or a composite two attribute (hash-and-range) primary key. Single attribute primary keys have one index value: a <code>HashKeyElement</code>. A composite hash-and-range primary key contains two attribute values: a <code>HashKeyElement</code> and a <code>RangeKeyElement</code>.
     */
    keySchema?: KeySchema;
    provisionedThroughput?: ProvisionedThroughputDescription;
    tableName?: string;
    tableSizeBytes?: number;
    tableStatus?: TableStatusEnum;
}
