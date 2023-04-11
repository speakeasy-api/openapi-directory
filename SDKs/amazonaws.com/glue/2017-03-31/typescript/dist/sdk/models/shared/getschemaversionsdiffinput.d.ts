import { SpeakeasyBase } from "../../../internal/utils";
import { SchemaDiffTypeEnum } from "./schemadifftypeenum";
import { SchemaId } from "./schemaid";
import { SchemaVersionNumber } from "./schemaversionnumber";
export declare class GetSchemaVersionsDiffInput extends SpeakeasyBase {
    firstSchemaVersionNumber: SchemaVersionNumber;
    schemaDiffType: SchemaDiffTypeEnum;
    schemaId: SchemaId;
    secondSchemaVersionNumber: SchemaVersionNumber;
}
