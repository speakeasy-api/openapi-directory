import { SpeakeasyBase } from "../../../internal/utils";
import { ConfluenceBlogFieldNameEnum } from "./confluenceblogfieldnameenum";
/**
 * Maps attributes or field names of Confluence blog to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Confluence fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Confluence data source field names must exist in your Confluence custom metadata.
 */
export declare class ConfluenceBlogToIndexFieldMapping extends SpeakeasyBase {
    dataSourceFieldName?: ConfluenceBlogFieldNameEnum;
    dateFieldFormat?: string;
    indexFieldName?: string;
}
