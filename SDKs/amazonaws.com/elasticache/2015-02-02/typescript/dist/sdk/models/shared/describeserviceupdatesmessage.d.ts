import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceUpdateStatusEnum } from "./serviceupdatestatusenum";
export declare class DescribeServiceUpdatesMessage extends SpeakeasyBase {
    marker?: string;
    maxRecords?: number;
    serviceUpdateName?: string;
    serviceUpdateStatus?: ServiceUpdateStatusEnum[];
}
