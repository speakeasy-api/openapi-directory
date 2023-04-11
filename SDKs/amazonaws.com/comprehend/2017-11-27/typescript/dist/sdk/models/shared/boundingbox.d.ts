import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The bounding box around the detected page or around an element on a document page. The left (x-coordinate) and top (y-coordinate) are coordinates that represent the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>For additional information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/API_BoundingBox.html">BoundingBox</a> in the Amazon Textract API reference.</p>
 */
export declare class BoundingBox extends SpeakeasyBase {
    height?: number;
    left?: number;
    top?: number;
    width?: number;
}
