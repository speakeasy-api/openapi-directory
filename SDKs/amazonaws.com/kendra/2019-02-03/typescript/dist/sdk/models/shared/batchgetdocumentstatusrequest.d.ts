import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentInfo } from "./documentinfo";
export declare class BatchGetDocumentStatusRequest extends SpeakeasyBase {
    documentInfoList: DocumentInfo[];
    indexId: string;
}
