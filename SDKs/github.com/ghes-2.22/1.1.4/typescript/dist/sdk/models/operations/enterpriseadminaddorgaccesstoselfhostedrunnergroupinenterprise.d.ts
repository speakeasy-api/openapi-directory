import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest extends SpeakeasyBase {
    /**
     * The slug version of the enterprise name. You can also substitute this value with the enterprise id.
     */
    enterprise: string;
    /**
     * Unique identifier of an organization.
     */
    orgId: number;
    /**
     * Unique identifier of the self-hosted runner group.
     */
    runnerGroupId: number;
}
export declare class EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
