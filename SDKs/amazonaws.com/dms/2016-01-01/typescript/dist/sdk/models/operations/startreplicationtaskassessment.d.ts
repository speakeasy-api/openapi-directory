import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartReplicationTaskAssessmentXAmzTargetEnum {
    AmazonDMSv20160101StartReplicationTaskAssessment = "AmazonDMSv20160101.StartReplicationTaskAssessment"
}
export declare class StartReplicationTaskAssessmentRequest extends SpeakeasyBase {
    startReplicationTaskAssessmentMessage: shared.StartReplicationTaskAssessmentMessage;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartReplicationTaskAssessmentXAmzTargetEnum;
}
export declare class StartReplicationTaskAssessmentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidResourceStateFault
     */
    invalidResourceStateFault?: any;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    /**
     * Success
     */
    startReplicationTaskAssessmentResponse?: shared.StartReplicationTaskAssessmentResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
