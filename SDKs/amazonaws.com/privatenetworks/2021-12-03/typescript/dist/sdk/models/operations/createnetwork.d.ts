import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateNetworkRequestBody extends SpeakeasyBase {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure idempotency</a>.
     */
    clientToken?: string;
    /**
     * The description of the network.
     */
    description?: string;
    /**
     * The name of the network. You can't change the name after you create the network.
     */
    networkName: string;
    /**
     *  The tags to apply to the network.
     */
    tags?: Record<string, string>;
}
export declare class CreateNetworkRequest extends SpeakeasyBase {
    requestBody: CreateNetworkRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateNetworkResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createNetworkResponse?: shared.CreateNetworkResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
