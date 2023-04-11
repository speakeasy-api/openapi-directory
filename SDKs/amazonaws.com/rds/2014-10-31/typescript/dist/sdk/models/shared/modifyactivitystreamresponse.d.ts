import { SpeakeasyBase } from "../../../internal/utils";
import { ActivityStreamModeEnum } from "./activitystreammodeenum";
import { ActivityStreamPolicyStatusEnum } from "./activitystreampolicystatusenum";
import { ActivityStreamStatusEnum } from "./activitystreamstatusenum";
/**
 * Success
 */
export declare class ModifyActivityStreamResponse extends SpeakeasyBase {
    engineNativeAuditFieldsIncluded?: boolean;
    kinesisStreamName?: string;
    kmsKeyId?: string;
    mode?: ActivityStreamModeEnum;
    policyStatus?: ActivityStreamPolicyStatusEnum;
    status?: ActivityStreamStatusEnum;
}
