import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentReaderConfig } from "./documentreaderconfig";
export declare class ClassifyDocumentRequest extends SpeakeasyBase {
    bytes?: string;
    documentReaderConfig?: DocumentReaderConfig;
    endpointArn: string;
    text?: string;
}
