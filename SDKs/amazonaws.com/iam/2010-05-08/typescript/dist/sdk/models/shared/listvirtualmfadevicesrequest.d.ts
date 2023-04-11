import { SpeakeasyBase } from "../../../internal/utils";
import { AssignmentStatusTypeEnum } from "./assignmentstatustypeenum";
export declare class ListVirtualMFADevicesRequest extends SpeakeasyBase {
    assignmentStatus?: AssignmentStatusTypeEnum;
    marker?: string;
    maxItems?: number;
}
