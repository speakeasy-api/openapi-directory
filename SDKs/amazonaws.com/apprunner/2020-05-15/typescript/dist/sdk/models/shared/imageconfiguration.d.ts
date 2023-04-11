import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the configuration that App Runner uses to run an App Runner service using an image pulled from a source image repository.
 */
export declare class ImageConfiguration extends SpeakeasyBase {
    port?: string;
    runtimeEnvironmentSecrets?: Record<string, string>;
    runtimeEnvironmentVariables?: Record<string, string>;
    startCommand?: string;
}
