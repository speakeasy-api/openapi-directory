import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateQualificationWithWorkerXAmzTargetEnum {
    MTurkRequesterServiceV20170117AssociateQualificationWithWorker = "MTurkRequesterServiceV20170117.AssociateQualificationWithWorker"
}
export declare class AssociateQualificationWithWorkerRequest extends SpeakeasyBase {
    associateQualificationWithWorkerRequest: shared.AssociateQualificationWithWorkerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateQualificationWithWorkerXAmzTargetEnum;
}
export declare class AssociateQualificationWithWorkerResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateQualificationWithWorkerResponse?: Record<string, any>;
    contentType: string;
    /**
     * RequestError
     */
    requestError?: any;
    /**
     * ServiceFault
     */
    serviceFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
