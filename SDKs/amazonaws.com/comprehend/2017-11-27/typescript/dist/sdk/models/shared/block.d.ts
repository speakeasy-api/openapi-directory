import { SpeakeasyBase } from "../../../internal/utils";
import { BlockTypeEnum } from "./blocktypeenum";
import { Geometry } from "./geometry";
import { RelationshipsListItem } from "./relationshipslistitem";
/**
 * <p>Information about each word or line of text in the input document.</p> <p>For additional information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/API_Block.html">Block</a> in the Amazon Textract API reference.</p>
 */
export declare class Block extends SpeakeasyBase {
    blockType?: BlockTypeEnum;
    geometry?: Geometry;
    id?: string;
    page?: number;
    relationships?: RelationshipsListItem[];
    text?: string;
}
