import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentAttributeValueTypeEnum } from "./documentattributevaluetypeenum";
import { Relevance } from "./relevance";
import { Search } from "./search";
/**
 * Specifies the properties, such as relevance tuning and searchability, of an index field.
 */
export declare class DocumentMetadataConfiguration extends SpeakeasyBase {
    name: string;
    relevance?: Relevance;
    search?: Search;
    type: DocumentAttributeValueTypeEnum;
}
