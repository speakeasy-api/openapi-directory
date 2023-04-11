import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteReplicationTaskAssessmentRunXAmzTargetEnum {
    AmazonDMSv20160101DeleteReplicationTaskAssessmentRun = "AmazonDMSv20160101.DeleteReplicationTaskAssessmentRun"
}
export declare class DeleteReplicationTaskAssessmentRunRequest extends SpeakeasyBase {
    deleteReplicationTaskAssessmentRunMessage: shared.DeleteReplicationTaskAssessmentRunMessage;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteReplicationTaskAssessmentRunXAmzTargetEnum;
}
export declare class DeleteReplicationTaskAssessmentRunResponse extends SpeakeasyBase {
    /**
     * AccessDeniedFault
     */
    accessDeniedFault?: any;
    contentType: string;
    /**
     * Success
     */
    deleteReplicationTaskAssessmentRunResponse?: shared.DeleteReplicationTaskAssessmentRunResponse;
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
