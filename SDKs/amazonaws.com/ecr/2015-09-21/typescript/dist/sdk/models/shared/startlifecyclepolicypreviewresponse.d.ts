import { SpeakeasyBase } from "../../../internal/utils";
import { LifecyclePolicyPreviewStatusEnum } from "./lifecyclepolicypreviewstatusenum";
/**
 * Success
 */
export declare class StartLifecyclePolicyPreviewResponse extends SpeakeasyBase {
    lifecyclePolicyText?: string;
    registryId?: string;
    repositoryName?: string;
    status?: LifecyclePolicyPreviewStatusEnum;
}
