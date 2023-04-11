import { SpeakeasyBase } from "../../../internal/utils";
import { RescoreExecutionPlanStatusEnum } from "./rescoreexecutionplanstatusenum";
/**
 * Summary information for a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API.
 */
export declare class RescoreExecutionPlanSummary extends SpeakeasyBase {
    createdAt?: Date;
    id?: string;
    name?: string;
    status?: RescoreExecutionPlanStatusEnum;
    updatedAt?: Date;
}
