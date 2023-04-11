import { SpeakeasyBase } from "../../../internal/utils";
import { ModelStatusEnum } from "./modelstatusenum";
/**
 * Provides information for filtering a list of document classifiers. You can only specify one filtering parameter in a request. For more information, see the <code>ListDocumentClassifiers</code> operation.
 */
export declare class DocumentClassifierFilter extends SpeakeasyBase {
    documentClassifierName?: string;
    status?: ModelStatusEnum;
    submitTimeAfter?: Date;
    submitTimeBefore?: Date;
}
