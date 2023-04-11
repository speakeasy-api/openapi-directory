import { SpeakeasyBase } from "../../../internal/utils";
import { ModelInput } from "./modelinput";
/**
 * Describes the Docker container for the model package.
 */
export declare class ModelPackageContainerDefinition extends SpeakeasyBase {
    containerHostname?: string;
    environment?: Record<string, string>;
    framework?: string;
    frameworkVersion?: string;
    image: string;
    imageDigest?: string;
    modelDataUrl?: string;
    modelInput?: ModelInput;
    nearestModelName?: string;
    productId?: string;
}
