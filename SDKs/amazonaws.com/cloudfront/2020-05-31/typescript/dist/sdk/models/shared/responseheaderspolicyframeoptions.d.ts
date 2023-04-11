import { SpeakeasyBase } from "../../../internal/utils";
import { FrameOptionsListEnum } from "./frameoptionslistenum";
/**
 * <p>Determines whether CloudFront includes the <code>X-Frame-Options</code> HTTP response header and the header's value.</p> <p>For more information about the <code>X-Frame-Options</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options">X-Frame-Options</a> in the MDN Web Docs.</p>
 */
export declare class ResponseHeadersPolicyFrameOptions extends SpeakeasyBase {
    frameOption: FrameOptionsListEnum;
    override: boolean;
}
