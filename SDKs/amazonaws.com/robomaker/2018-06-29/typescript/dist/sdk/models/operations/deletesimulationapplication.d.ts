import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteSimulationApplicationRequestBody extends SpeakeasyBase {
    /**
     * The application information for the simulation application to delete.
     */
    application: string;
    /**
     * The version of the simulation application to delete.
     */
    applicationVersion?: string;
}
export declare class DeleteSimulationApplicationRequest extends SpeakeasyBase {
    requestBody: DeleteSimulationApplicationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteSimulationApplicationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteSimulationApplicationResponse?: Record<string, any>;
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
