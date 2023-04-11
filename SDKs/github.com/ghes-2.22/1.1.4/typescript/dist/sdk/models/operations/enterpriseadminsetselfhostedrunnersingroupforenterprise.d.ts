import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequestBody extends SpeakeasyBase {
    /**
     * List of runner IDs to add to the runner group.
     */
    runners: number[];
}
export declare class EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequest extends SpeakeasyBase {
    requestBody: EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequestBody;
    /**
     * The slug version of the enterprise name. You can also substitute this value with the enterprise id.
     */
    enterprise: string;
    /**
     * Unique identifier of the self-hosted runner group.
     */
    runnerGroupId: number;
}
export declare class EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
