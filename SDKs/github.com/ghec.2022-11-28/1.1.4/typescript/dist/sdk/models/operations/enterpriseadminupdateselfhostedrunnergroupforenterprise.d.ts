import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Visibility of a runner group. You can select all organizations or select individual organizations.
 */
export declare enum EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum {
    Selected = "selected",
    All = "all"
}
export declare class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBody extends SpeakeasyBase {
    /**
     * Whether the runner group can be used by `public` repositories.
     */
    allowsPublicRepositories?: boolean;
    /**
     * Name of the runner group.
     */
    name?: string;
    /**
     * If `true`, the runner group will be restricted to running only the workflows specified in the `selected_workflows` array.
     */
    restrictedToWorkflows?: boolean;
    /**
     * List of workflows the runner group should be allowed to run. This setting will be ignored unless `restricted_to_workflows` is set to `true`.
     */
    selectedWorkflows?: string[];
    /**
     * Visibility of a runner group. You can select all organizations or select individual organizations.
     */
    visibility?: EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum;
}
export declare class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequest extends SpeakeasyBase {
    requestBody?: EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBody;
    /**
     * The slug version of the enterprise name. You can also substitute this value with the enterprise id.
     */
    enterprise: string;
    /**
     * Unique identifier of the self-hosted runner group.
     */
    runnerGroupId: number;
}
export declare class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    runnerGroupsEnterprise?: shared.RunnerGroupsEnterprise;
}
