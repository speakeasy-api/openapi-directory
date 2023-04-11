import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteRobotApplicationRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the the robot application.
     */
    application: string;
    /**
     * The version of the robot application to delete.
     */
    applicationVersion?: string;
}
export declare class DeleteRobotApplicationRequest extends SpeakeasyBase {
    requestBody: DeleteRobotApplicationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteRobotApplicationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteRobotApplicationResponse?: Record<string, any>;
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
