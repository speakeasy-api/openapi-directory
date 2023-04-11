import { SpeakeasyBase } from "../../../internal/utils";
/**
 * describes a normalization config for destination definition
 */
export declare class NormalizationDestinationDefinitionConfig extends SpeakeasyBase {
    /**
     * a field indicating the type of integration dialect to use for normalization.
     */
    normalizationIntegrationType?: string;
    /**
     * a field indicating the name of the repository to be used for normalization. If the value of the flag is NULL - normalization is not used.
     */
    normalizationRepository?: string;
    /**
     * a field indicating the tag of the docker repository to be used for normalization.
     */
    normalizationTag?: string;
    /**
     * whether the destination definition supports normalization.
     */
    supported: boolean;
}
