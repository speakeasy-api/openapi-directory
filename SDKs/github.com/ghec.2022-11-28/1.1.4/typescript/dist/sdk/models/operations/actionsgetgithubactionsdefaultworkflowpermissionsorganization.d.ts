import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsGetGithubActionsDefaultWorkflowPermissionsOrganizationRequest extends SpeakeasyBase {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
}
export declare class ActionsGetGithubActionsDefaultWorkflowPermissionsOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsGetDefaultWorkflowPermissions?: shared.ActionsGetDefaultWorkflowPermissions;
}
