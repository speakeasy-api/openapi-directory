import { SpeakeasyBase } from "../../../internal/utils";
import { TemplateInput } from "./templateinput";
import { TemplateStatusEnum } from "./templatestatusenum";
import { Tool } from "./tool";
/**
 * Success
 */
export declare class GetMigrationWorkflowTemplateResponse extends SpeakeasyBase {
    creationTime?: Date;
    description?: string;
    id?: string;
    inputs?: TemplateInput[];
    name?: string;
    status?: TemplateStatusEnum;
    tools?: Tool[];
}
