import { SpeakeasyBase } from "../../../internal/utils";
/**
 * List of limitations on used resources, that are applied on the current instance of Registry.
 *
 * @remarks
 * Keys represent the resource type and are suffixed by the corresponding unit.
 * Values are integers. Only non-negative values are allowed, with the exception of -1, which means that the limit is not applied.
 */
export declare class Limits extends SpeakeasyBase {
    maxArtifactDescriptionLengthChars?: number;
    maxArtifactLabelsCount?: number;
    maxArtifactNameLengthChars?: number;
    maxArtifactPropertiesCount?: number;
    maxArtifactsCount?: number;
    maxLabelSizeBytes?: number;
    maxPropertyKeySizeBytes?: number;
    maxPropertyValueSizeBytes?: number;
    maxRequestsPerSecondCount?: number;
    maxSchemaSizeBytes?: number;
    maxTotalSchemasCount?: number;
    maxVersionsPerArtifactCount?: number;
}
