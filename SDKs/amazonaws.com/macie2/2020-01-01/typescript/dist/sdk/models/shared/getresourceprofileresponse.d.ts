import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceStatistics } from "./resourcestatistics";
/**
 * Success
 */
export declare class GetResourceProfileResponse extends SpeakeasyBase {
    profileUpdatedAt?: Date;
    sensitivityScore?: number;
    sensitivityScoreOverridden?: boolean;
    statistics?: ResourceStatistics;
}
