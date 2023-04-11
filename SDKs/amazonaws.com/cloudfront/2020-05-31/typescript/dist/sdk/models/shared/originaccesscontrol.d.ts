import { SpeakeasyBase } from "../../../internal/utils";
import { OriginAccessControlConfig } from "./originaccesscontrolconfig";
/**
 * A CloudFront origin access control, including its unique identifier.
 */
export declare class OriginAccessControl extends SpeakeasyBase {
    id: string;
    originAccessControlConfig?: OriginAccessControlConfig;
}
