import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configure image tests for your pipeline build. Tests run after building the image, to verify that the AMI or container image is valid before distributing it.
 */
export declare class ImageTestsConfiguration extends SpeakeasyBase {
    imageTestsEnabled?: boolean;
    timeoutMinutes?: number;
}
