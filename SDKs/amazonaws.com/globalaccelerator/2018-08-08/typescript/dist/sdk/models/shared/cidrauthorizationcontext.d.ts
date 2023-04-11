import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Provides authorization for Amazon to bring a specific IP address range to a specific Amazon Web Services account using bring your own IP addresses (BYOIP). </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>
 */
export declare class CidrAuthorizationContext extends SpeakeasyBase {
    message: string;
    signature: string;
}
