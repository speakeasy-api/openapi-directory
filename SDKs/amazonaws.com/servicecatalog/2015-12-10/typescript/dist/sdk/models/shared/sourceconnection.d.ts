import { SpeakeasyBase } from "../../../internal/utils";
import { SourceConnectionParameters } from "./sourceconnectionparameters";
import { SourceTypeEnum } from "./sourcetypeenum";
/**
 * A top level <code>ProductViewDetail</code> response containing details about the product’s connection. Service Catalog returns this field for the <code>CreateProduct</code>, <code>UpdateProduct</code>, <code>DescribeProductAsAdmin</code>, and <code>SearchProductAsAdmin</code> APIs. This response contains the same fields as the <code>ConnectionParameters</code> request, with the addition of the <code>LastSync</code> response.
 */
export declare class SourceConnection extends SpeakeasyBase {
    connectionParameters: SourceConnectionParameters;
    type?: SourceTypeEnum;
}
