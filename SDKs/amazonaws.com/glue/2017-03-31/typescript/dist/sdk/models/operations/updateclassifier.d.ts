import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateClassifierXAmzTargetEnum {
    AWSGlueUpdateClassifier = "AWSGlue.UpdateClassifier"
}
export declare class UpdateClassifierRequest extends SpeakeasyBase {
    updateClassifierRequest: shared.UpdateClassifierRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateClassifierXAmzTargetEnum;
}
export declare class UpdateClassifierResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateClassifierResponse?: Record<string, any>;
    /**
     * VersionMismatchException
     */
    versionMismatchException?: any;
}
