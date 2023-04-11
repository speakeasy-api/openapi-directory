import { SpeakeasyBase } from "../../../internal/utils";
import { ConfluenceSpaceFieldNameEnum } from "./confluencespacefieldnameenum";
/**
 * Maps attributes or field names of Confluence spaces to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Confluence fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Confluence data source field names must exist in your Confluence custom metadata.
 */
export declare class ConfluenceSpaceToIndexFieldMapping extends SpeakeasyBase {
    dataSourceFieldName?: ConfluenceSpaceFieldNameEnum;
    dateFieldFormat?: string;
    indexFieldName?: string;
}
