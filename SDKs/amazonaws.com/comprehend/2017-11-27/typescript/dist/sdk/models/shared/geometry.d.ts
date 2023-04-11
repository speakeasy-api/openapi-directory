import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingBox } from "./boundingbox";
import { Point } from "./point";
/**
 * <p>Information about the location of items on a document page.</p> <p>For additional information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/API_Geometry.html">Geometry</a> in the Amazon Textract API reference.</p>
 */
export declare class Geometry extends SpeakeasyBase {
    boundingBox?: BoundingBox;
    polygon?: Point[];
}
