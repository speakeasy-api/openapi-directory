import { SpeakeasyBase } from "../../../internal/utils";
import { ParallelDataStatusEnum } from "./paralleldatastatusenum";
/**
 * Success
 */
export declare class UpdateParallelDataResponse extends SpeakeasyBase {
    latestUpdateAttemptAt?: Date;
    latestUpdateAttemptStatus?: ParallelDataStatusEnum;
    name?: string;
    status?: ParallelDataStatusEnum;
}
