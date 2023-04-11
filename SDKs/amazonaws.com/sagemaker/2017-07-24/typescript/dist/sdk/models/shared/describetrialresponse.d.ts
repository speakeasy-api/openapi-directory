import { SpeakeasyBase } from "../../../internal/utils";
import { MetadataProperties } from "./metadataproperties";
import { TrialSource } from "./trialsource";
import { UserContext } from "./usercontext";
/**
 * Success
 */
export declare class DescribeTrialResponse extends SpeakeasyBase {
    createdBy?: UserContext;
    creationTime?: Date;
    displayName?: string;
    experimentName?: string;
    lastModifiedBy?: UserContext;
    lastModifiedTime?: Date;
    /**
     * Metadata properties of the tracking entity, trial, or trial component.
     */
    metadataProperties?: MetadataProperties;
    source?: TrialSource;
    trialArn?: string;
    trialName?: string;
}
