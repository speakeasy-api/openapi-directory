import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActivateDeviceIdentifierRequestBody extends SpeakeasyBase {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure idempotency</a>.
     */
    clientToken?: string;
    /**
     * The Amazon Resource Name (ARN) of the device identifier.
     */
    deviceIdentifierArn: string;
}
export declare class ActivateDeviceIdentifierRequest extends SpeakeasyBase {
    requestBody: ActivateDeviceIdentifierRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ActivateDeviceIdentifierResponse extends SpeakeasyBase {
    /**
     * Success
     */
    activateDeviceIdentifierResponse?: shared.ActivateDeviceIdentifierResponse;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
