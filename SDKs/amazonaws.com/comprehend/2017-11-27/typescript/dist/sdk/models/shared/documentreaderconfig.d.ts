import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentReadActionEnum } from "./documentreadactionenum";
import { DocumentReadFeatureTypesEnum } from "./documentreadfeaturetypesenum";
import { DocumentReadModeEnum } from "./documentreadmodeenum";
/**
 * <p>Provides configuration parameters to override the default actions for extracting text from PDF documents and image files. </p> <p> By default, Amazon Comprehend performs the following actions to extract text from files, based on the input file type: </p> <ul> <li> <p> <b>Word files</b> - Amazon Comprehend parser extracts the text. </p> </li> <li> <p> <b>Digital PDF files</b> - Amazon Comprehend parser extracts the text. </p> </li> <li> <p> <b>Image files and scanned PDF files</b> - Amazon Comprehend uses the Amazon Textract <code>DetectDocumentText</code> API to extract the text. </p> </li> </ul> <p> <code>DocumentReaderConfig</code> does not apply to plain text files or Word files.</p> <p> For image files and PDF documents, you can override these default actions using the fields listed below. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/detecting-cer.html#detecting-cer-pdf"> Setting text extraction options</a>. </p>
 */
export declare class DocumentReaderConfig extends SpeakeasyBase {
    documentReadAction: DocumentReadActionEnum;
    documentReadMode?: DocumentReadModeEnum;
    featureTypes?: DocumentReadFeatureTypesEnum[];
}
