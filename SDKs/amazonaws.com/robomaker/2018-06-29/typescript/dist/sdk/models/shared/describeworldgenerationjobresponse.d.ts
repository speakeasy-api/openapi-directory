import { SpeakeasyBase } from "../../../internal/utils";
import { FinishedWorldsSummary } from "./finishedworldssummary";
import { WorldCount } from "./worldcount";
import { WorldGenerationJobErrorCodeEnum } from "./worldgenerationjoberrorcodeenum";
import { WorldGenerationJobStatusEnum } from "./worldgenerationjobstatusenum";
/**
 * Success
 */
export declare class DescribeWorldGenerationJobResponse extends SpeakeasyBase {
    arn?: string;
    clientRequestToken?: string;
    createdAt?: Date;
    failureCode?: WorldGenerationJobErrorCodeEnum;
    failureReason?: string;
    finishedWorldsSummary?: FinishedWorldsSummary;
    status?: WorldGenerationJobStatusEnum;
    tags?: Record<string, string>;
    template?: string;
    worldCount?: WorldCount;
    worldTags?: Record<string, string>;
}
