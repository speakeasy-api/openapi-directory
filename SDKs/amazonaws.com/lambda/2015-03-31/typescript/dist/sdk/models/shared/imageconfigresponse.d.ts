import { SpeakeasyBase } from "../../../internal/utils";
import { ImageConfig } from "./imageconfig";
import { ImageConfigError } from "./imageconfigerror";
/**
 * Response to a <code>GetFunctionConfiguration</code> request.
 */
export declare class ImageConfigResponse extends SpeakeasyBase {
    error?: ImageConfigError;
    imageConfig?: ImageConfig;
}
