import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociateQualificationFromWorkerXAmzTargetEnum {
    MTurkRequesterServiceV20170117DisassociateQualificationFromWorker = "MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker"
}
export declare class DisassociateQualificationFromWorkerRequest extends SpeakeasyBase {
    disassociateQualificationFromWorkerRequest: shared.DisassociateQualificationFromWorkerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateQualificationFromWorkerXAmzTargetEnum;
}
export declare class DisassociateQualificationFromWorkerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disassociateQualificationFromWorkerResponse?: Record<string, any>;
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
