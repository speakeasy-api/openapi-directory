import { SpeakeasyBase } from "../../../internal/utils";
import { StepGroupStatusEnum } from "./stepgroupstatusenum";
import { Tool } from "./tool";
/**
 * Success
 */
export declare class GetTemplateStepGroupResponse extends SpeakeasyBase {
    creationTime?: Date;
    description?: string;
    id?: string;
    lastModifiedTime?: Date;
    name?: string;
    next?: string[];
    previous?: string[];
    status?: StepGroupStatusEnum;
    templateId?: string;
    tools?: Tool[];
}
