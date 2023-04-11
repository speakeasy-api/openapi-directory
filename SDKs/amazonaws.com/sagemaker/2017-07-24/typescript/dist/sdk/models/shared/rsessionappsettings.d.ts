import { SpeakeasyBase } from "../../../internal/utils";
import { CustomImage } from "./customimage";
import { ResourceSpec } from "./resourcespec";
/**
 * A collection of settings that apply to an <code>RSessionGateway</code> app.
 */
export declare class RSessionAppSettings extends SpeakeasyBase {
    customImages?: CustomImage[];
    /**
     * Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that the version runs on.
     */
    defaultResourceSpec?: ResourceSpec;
}
