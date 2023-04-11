import { SpeakeasyBase } from "../../../internal/utils";
import { PiiTypeEnum } from "./piitypeenum";
/**
 * Specifies a transform that identifies, removes or masks PII data.
 */
export declare class PIIDetection extends SpeakeasyBase {
    entityTypesToDetect: string[];
    inputs: string[];
    maskValue?: string;
    name: string;
    outputColumnName?: string;
    piiType: PiiTypeEnum;
    sampleFraction?: number;
    thresholdFraction?: number;
}
