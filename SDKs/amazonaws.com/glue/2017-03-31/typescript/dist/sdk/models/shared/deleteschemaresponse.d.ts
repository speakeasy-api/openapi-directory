import { SpeakeasyBase } from "../../../internal/utils";
import { SchemaStatusEnum } from "./schemastatusenum";
/**
 * Success
 */
export declare class DeleteSchemaResponse extends SpeakeasyBase {
    schemaArn?: string;
    schemaName?: string;
    status?: SchemaStatusEnum;
}
