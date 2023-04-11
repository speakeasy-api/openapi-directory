import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ResetDeploymentsRequestBody extends SpeakeasyBase {
    /**
     * If true, performs a best-effort only core reset.
     */
    force?: boolean;
}
export declare class ResetDeploymentsRequest extends SpeakeasyBase {
    /**
     * The ID of the Greengrass group.
     */
    groupId: string;
    requestBody: ResetDeploymentsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * A client token used to correlate requests and responses.
     */
    xAmznClientToken?: string;
}
export declare class ResetDeploymentsResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    resetDeploymentsResponse?: shared.ResetDeploymentsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
