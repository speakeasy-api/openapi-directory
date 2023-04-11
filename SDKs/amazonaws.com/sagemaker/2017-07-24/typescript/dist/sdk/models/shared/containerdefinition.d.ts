import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerModeEnum } from "./containermodeenum";
import { ImageConfig } from "./imageconfig";
import { MultiModelConfig } from "./multimodelconfig";
/**
 * Describes the container, as part of model definition.
 */
export declare class ContainerDefinition extends SpeakeasyBase {
    containerHostname?: string;
    environment?: Record<string, string>;
    image?: string;
    imageConfig?: ImageConfig;
    inferenceSpecificationName?: string;
    mode?: ContainerModeEnum;
    modelDataUrl?: string;
    modelPackageName?: string;
    multiModelConfig?: MultiModelConfig;
}
