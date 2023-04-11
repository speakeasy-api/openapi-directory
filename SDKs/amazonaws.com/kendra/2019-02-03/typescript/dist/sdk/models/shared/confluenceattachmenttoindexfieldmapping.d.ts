import { SpeakeasyBase } from "../../../internal/utils";
import { ConfluenceAttachmentFieldNameEnum } from "./confluenceattachmentfieldnameenum";
/**
 * Maps attributes or field names of Confluence attachments to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Confluence fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Confuence data source field names must exist in your Confluence custom metadata.
 */
export declare class ConfluenceAttachmentToIndexFieldMapping extends SpeakeasyBase {
    dataSourceFieldName?: ConfluenceAttachmentFieldNameEnum;
    dateFieldFormat?: string;
    indexFieldName?: string;
}
