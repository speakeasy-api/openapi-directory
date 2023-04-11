import { SpeakeasyBase } from "../../../internal/utils";
import { EcrScanFrequencyEnum } from "./ecrscanfrequencyenum";
/**
 * Information on the Amazon ECR repository metadata associated with a finding.
 */
export declare class EcrRepositoryMetadata extends SpeakeasyBase {
    name?: string;
    scanFrequency?: EcrScanFrequencyEnum;
}
