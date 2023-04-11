import { SpeakeasyBase } from "../../../internal/utils";
import { ScimSchemaParentAttribute } from "./scimschemaparentattribute";
export declare class ScimSchema extends SpeakeasyBase {
    attributes?: ScimSchemaParentAttribute[];
    description?: string;
    id?: string;
    name?: string;
    schemas?: string[];
}
