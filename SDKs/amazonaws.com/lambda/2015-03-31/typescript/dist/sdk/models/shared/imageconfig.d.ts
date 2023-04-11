import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration values that override the container image Dockerfile settings. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms">Container image settings</a>.
 */
export declare class ImageConfig extends SpeakeasyBase {
    command?: string[];
    entryPoint?: string[];
    workingDirectory?: string;
}
