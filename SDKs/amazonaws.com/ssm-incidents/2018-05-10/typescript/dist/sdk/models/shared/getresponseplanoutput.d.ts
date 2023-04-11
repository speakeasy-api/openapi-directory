import { SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
import { ChatChannel } from "./chatchannel";
import { IncidentTemplate } from "./incidenttemplate";
import { Integration } from "./integration";
/**
 * Success
 */
export declare class GetResponsePlanOutput extends SpeakeasyBase {
    actions?: Action[];
    arn: string;
    chatChannel?: ChatChannel;
    displayName?: string;
    engagements?: string[];
    incidentTemplate: IncidentTemplate;
    integrations?: Integration[];
    name: string;
}
