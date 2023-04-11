import { SpeakeasyBase } from "../../../internal/utils";
import { PartOfSpeechTagTypeEnum } from "./partofspeechtagtypeenum";
/**
 * Identifies the part of speech represented by the token and gives the confidence that Amazon Comprehend has that the part of speech was correctly identified. For more information about the parts of speech that Amazon Comprehend can identify, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide.
 */
export declare class PartOfSpeechTag extends SpeakeasyBase {
    score?: number;
    tag?: PartOfSpeechTagTypeEnum;
}
