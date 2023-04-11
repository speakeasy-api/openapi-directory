import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartReplicationTaskAssessmentRunXAmzTargetEnum {
    AmazonDMSv20160101StartReplicationTaskAssessmentRun = "AmazonDMSv20160101.StartReplicationTaskAssessmentRun"
}
export declare class StartReplicationTaskAssessmentRunRequest extends SpeakeasyBase {
    startReplicationTaskAssessmentRunMessage: shared.StartReplicationTaskAssessmentRunMessage;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartReplicationTaskAssessmentRunXAmzTargetEnum;
}
export declare class StartReplicationTaskAssessmentRunResponse extends SpeakeasyBase {
    /**
     * AccessDeniedFault
     */
    accessDeniedFault?: any;
    contentType: string;
    /**
     * InvalidResourceStateFault
     */
    invalidResourceStateFault?: any;
    /**
     * KMSAccessDeniedFault
     */
    kmsAccessDeniedFault?: any;
    /**
     * KMSDisabledFault
     */
    kmsDisabledFault?: any;
    /**
     * KMSFault
     */
    kmsFault?: any;
    /**
     * KMSInvalidStateFault
     */
    kmsInvalidStateFault?: any;
    /**
     * KMSKeyNotAccessibleFault
     */
    kmsKeyNotAccessibleFault?: any;
    /**
     * KMSNotFoundFault
     */
    kmsNotFoundFault?: any;
    /**
     * ResourceAlreadyExistsFault
     */
    resourceAlreadyExistsFault?: any;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    /**
     * S3AccessDeniedFault
     */
    s3AccessDeniedFault?: any;
    /**
     * S3ResourceNotFoundFault
     */
    s3ResourceNotFoundFault?: any;
    /**
     * Success
     */
    startReplicationTaskAssessmentRunResponse?: shared.StartReplicationTaskAssessmentRunResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
