import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequest extends SpeakeasyBase {
    /**
     * The slug version of the enterprise name. You can also substitute this value with the enterprise id.
     */
    enterprise: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
    /**
     * Unique identifier of the self-hosted runner group.
     */
    runnerGroupId: number;
}
/**
 * Response
 */
export declare class EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJSON extends SpeakeasyBase {
    runners: shared.RunnerNoLabels[];
    totalCount: number;
}
export declare class EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    enterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJSONObject?: EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJSON;
}
