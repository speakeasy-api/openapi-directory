import { SpeakeasyBase } from "../../../internal/utils";
import { PiiEntityTypeEnum } from "./piientitytypeenum";
import { RedactionOutputEnum } from "./redactionoutputenum";
import { RedactionTypeEnum } from "./redactiontypeenum";
/**
 * Makes it possible to redact or flag specified personally identifiable information (PII) in your transcript. If you use <code>ContentRedaction</code>, you must also include the sub-parameters: <code>PiiEntityTypes</code>, <code>RedactionOutput</code>, and <code>RedactionType</code>.
 */
export declare class ContentRedaction extends SpeakeasyBase {
    piiEntityTypes?: PiiEntityTypeEnum[];
    redactionOutput: RedactionOutputEnum;
    redactionType: RedactionTypeEnum;
}
