import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateContinuousBackupsXAmzTargetEnum {
    DynamoDB20120810UpdateContinuousBackups = "DynamoDB_20120810.UpdateContinuousBackups"
}
export declare class UpdateContinuousBackupsRequest extends SpeakeasyBase {
    updateContinuousBackupsInput: shared.UpdateContinuousBackupsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateContinuousBackupsXAmzTargetEnum;
}
export declare class UpdateContinuousBackupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ContinuousBackupsUnavailableException
     */
    continuousBackupsUnavailableException?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TableNotFoundException
     */
    tableNotFoundException?: any;
    /**
     * Success
     */
    updateContinuousBackupsOutput?: shared.UpdateContinuousBackupsOutput;
}
