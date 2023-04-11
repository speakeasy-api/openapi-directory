import { SpeakeasyBase } from "../../../internal/utils";
import { SchemaVersionStatusEnum } from "./schemaversionstatusenum";
/**
 * Success
 */
export declare class RegisterSchemaVersionResponse extends SpeakeasyBase {
    schemaVersionId?: string;
    status?: SchemaVersionStatusEnum;
    versionNumber?: number;
}
