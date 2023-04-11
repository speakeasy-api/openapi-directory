import { SpeakeasyBase } from "../../../internal/utils";
import { ClassificationResult } from "./classificationresult";
import { OriginTypeEnum } from "./origintypeenum";
/**
 * Provides information about a sensitive data finding and the details of the finding.
 */
export declare class ClassificationDetails extends SpeakeasyBase {
    detailedResultsLocation?: string;
    jobArn?: string;
    jobId?: string;
    originType?: OriginTypeEnum;
    result?: ClassificationResult;
}
