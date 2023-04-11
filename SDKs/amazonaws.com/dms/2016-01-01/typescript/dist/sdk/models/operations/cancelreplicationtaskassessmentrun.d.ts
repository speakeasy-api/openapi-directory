import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CancelReplicationTaskAssessmentRunXAmzTargetEnum {
    AmazonDMSv20160101CancelReplicationTaskAssessmentRun = "AmazonDMSv20160101.CancelReplicationTaskAssessmentRun"
}
export declare class CancelReplicationTaskAssessmentRunRequest extends SpeakeasyBase {
    cancelReplicationTaskAssessmentRunMessage: shared.CancelReplicationTaskAssessmentRunMessage;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelReplicationTaskAssessmentRunXAmzTargetEnum;
}
export declare class CancelReplicationTaskAssessmentRunResponse extends SpeakeasyBase {
    /**
     * AccessDeniedFault
     */
    accessDeniedFault?: any;
    /**
     * Success
     */
    cancelReplicationTaskAssessmentRunResponse?: shared.CancelReplicationTaskAssessmentRunResponse;
    contentType: string;
    /**
     * InvalidResourceStateFault
     */
    invalidResourceStateFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
}
