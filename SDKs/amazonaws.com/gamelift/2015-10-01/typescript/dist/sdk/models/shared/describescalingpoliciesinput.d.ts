import { SpeakeasyBase } from "../../../internal/utils";
import { ScalingStatusTypeEnum } from "./scalingstatustypeenum";
export declare class DescribeScalingPoliciesInput extends SpeakeasyBase {
    fleetId: string;
    limit?: number;
    location?: string;
    nextToken?: string;
    statusFilter?: ScalingStatusTypeEnum;
}
