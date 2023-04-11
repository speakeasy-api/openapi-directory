import { SpeakeasyBase } from "../../../internal/utils";
import { WorldCount } from "./worldcount";
import { WorldGenerationJobErrorCodeEnum } from "./worldgenerationjoberrorcodeenum";
import { WorldGenerationJobStatusEnum } from "./worldgenerationjobstatusenum";
/**
 * Success
 */
export declare class CreateWorldGenerationJobResponse extends SpeakeasyBase {
    arn?: string;
    clientRequestToken?: string;
    createdAt?: Date;
    failureCode?: WorldGenerationJobErrorCodeEnum;
    status?: WorldGenerationJobStatusEnum;
    tags?: Record<string, string>;
    template?: string;
    worldCount?: WorldCount;
    worldTags?: Record<string, string>;
}
