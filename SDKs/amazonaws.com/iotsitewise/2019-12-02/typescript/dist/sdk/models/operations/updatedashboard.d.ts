import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateDashboardRequestBody extends SpeakeasyBase {
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: string;
    /**
     * The new dashboard definition, as specified in a JSON literal. For detailed information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-using-aws-cli.html">Creating dashboards (CLI)</a> in the <i>IoT SiteWise User Guide</i>.
     */
    dashboardDefinition: string;
    /**
     * A new description for the dashboard.
     */
    dashboardDescription?: string;
    /**
     * A new friendly name for the dashboard.
     */
    dashboardName: string;
}
export declare class UpdateDashboardRequest extends SpeakeasyBase {
    requestBody: UpdateDashboardRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the dashboard to update.
     */
    dashboardId: string;
}
export declare class UpdateDashboardResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateDashboardResponse?: Record<string, any>;
}
