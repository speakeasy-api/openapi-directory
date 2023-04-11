import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteFleetRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the fleet.
     */
    fleet: string;
}
export declare class DeleteFleetRequest extends SpeakeasyBase {
    requestBody: DeleteFleetRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteFleetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteFleetResponse?: Record<string, any>;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
