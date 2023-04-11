import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeTypeEnum } from "./attributetypeenum";
/**
 * An attribute of a schema, which defines a dataset field. A schema attribute is required for every field in a dataset. The <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_Schema.html">Schema</a> object contains an array of <code>SchemaAttribute</code> objects.
 */
export declare class SchemaAttribute extends SpeakeasyBase {
    attributeName?: string;
    attributeType?: AttributeTypeEnum;
}
