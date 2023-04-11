import { SpeakeasyBase } from "../../../internal/utils";
import { ModifyAvailabilityZoneOptInStatusEnum } from "./modifyavailabilityzoneoptinstatusenum";
export declare class ModifyAvailabilityZoneGroupRequest extends SpeakeasyBase {
    dryRun?: boolean;
    groupName: string;
    optInStatus: ModifyAvailabilityZoneOptInStatusEnum;
}
