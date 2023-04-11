import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RestoreTableToPointInTimeXAmzTargetEnum {
    DynamoDB20120810RestoreTableToPointInTime = "DynamoDB_20120810.RestoreTableToPointInTime"
}
export declare class RestoreTableToPointInTimeRequest extends SpeakeasyBase {
    restoreTableToPointInTimeInput: shared.RestoreTableToPointInTimeInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RestoreTableToPointInTimeXAmzTargetEnum;
}
export declare class RestoreTableToPointInTimeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidRestoreTimeException
     */
    invalidRestoreTimeException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * PointInTimeRecoveryUnavailableException
     */
    pointInTimeRecoveryUnavailableException?: any;
    /**
     * Success
     */
    restoreTableToPointInTimeOutput?: shared.RestoreTableToPointInTimeOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TableAlreadyExistsException
     */
    tableAlreadyExistsException?: any;
    /**
     * TableInUseException
     */
    tableInUseException?: any;
    /**
     * TableNotFoundException
     */
    tableNotFoundException?: any;
}
