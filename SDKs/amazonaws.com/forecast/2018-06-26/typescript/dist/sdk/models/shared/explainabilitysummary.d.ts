import { SpeakeasyBase } from "../../../internal/utils";
import { ExplainabilityConfig } from "./explainabilityconfig";
/**
 * Provides a summary of the Explainability properties used in the <a>ListExplainabilities</a> operation. To get a complete set of properties, call the <a>DescribeExplainability</a> operation, and provide the listed <code>ExplainabilityArn</code>.
 */
export declare class ExplainabilitySummary extends SpeakeasyBase {
    creationTime?: Date;
    explainabilityArn?: string;
    explainabilityConfig?: ExplainabilityConfig;
    explainabilityName?: string;
    lastModificationTime?: Date;
    message?: string;
    resourceArn?: string;
    status?: string;
}
