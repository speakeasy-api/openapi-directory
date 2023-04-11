import { SpeakeasyBase } from "../../../internal/utils";
import { MetadataProperties } from "./metadataproperties";
import { Tag } from "./tag";
export declare class CreateTrialRequest extends SpeakeasyBase {
    displayName?: string;
    experimentName: string;
    /**
     * Metadata properties of the tracking entity, trial, or trial component.
     */
    metadataProperties?: MetadataProperties;
    tags?: Tag[];
    trialName: string;
}
