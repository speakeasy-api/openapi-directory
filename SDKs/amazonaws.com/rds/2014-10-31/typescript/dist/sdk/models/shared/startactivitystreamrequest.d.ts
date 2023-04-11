import { SpeakeasyBase } from "../../../internal/utils";
import { ActivityStreamModeEnum } from "./activitystreammodeenum";
export declare class StartActivityStreamRequest extends SpeakeasyBase {
    applyImmediately?: boolean;
    engineNativeAuditFieldsIncluded?: boolean;
    kmsKeyId: string;
    mode: ActivityStreamModeEnum;
    resourceArn: string;
}
