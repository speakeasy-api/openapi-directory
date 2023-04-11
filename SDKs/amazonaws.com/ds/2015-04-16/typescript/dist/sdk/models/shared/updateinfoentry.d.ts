import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateStatusEnum } from "./updatestatusenum";
import { UpdateValue } from "./updatevalue";
/**
 *  An entry of update information related to a requested update type.
 */
export declare class UpdateInfoEntry extends SpeakeasyBase {
    initiatedBy?: string;
    lastUpdatedDateTime?: Date;
    newValue?: UpdateValue;
    previousValue?: UpdateValue;
    region?: string;
    startTime?: Date;
    status?: UpdateStatusEnum;
    statusReason?: string;
}
