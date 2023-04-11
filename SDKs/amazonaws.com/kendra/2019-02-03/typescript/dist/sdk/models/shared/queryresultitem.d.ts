import { SpeakeasyBase } from "../../../internal/utils";
import { AdditionalResultAttribute } from "./additionalresultattribute";
import { DocumentAttribute } from "./documentattribute";
import { QueryResultFormatEnum } from "./queryresultformatenum";
import { QueryResultTypeEnum } from "./queryresulttypeenum";
import { ScoreAttributes } from "./scoreattributes";
import { TableExcerpt } from "./tableexcerpt";
import { TextWithHighlights } from "./textwithhighlights";
/**
 * <p>A single query result.</p> <p>A query result contains information about a document returned by the query. This includes the original location of the document, a list of attributes assigned to the document, and relevant text from the document that satisfies the query.</p>
 */
export declare class QueryResultItem extends SpeakeasyBase {
    additionalAttributes?: AdditionalResultAttribute[];
    documentAttributes?: DocumentAttribute[];
    documentExcerpt?: TextWithHighlights;
    documentId?: string;
    documentTitle?: TextWithHighlights;
    documentURI?: string;
    feedbackToken?: string;
    format?: QueryResultFormatEnum;
    id?: string;
    scoreAttributes?: ScoreAttributes;
    tableExcerpt?: TableExcerpt;
    type?: QueryResultTypeEnum;
}
