import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateWorkforceXAmzTargetEnum {
    SageMakerUpdateWorkforce = "SageMaker.UpdateWorkforce"
}
export declare class UpdateWorkforceRequest extends SpeakeasyBase {
    updateWorkforceRequest: shared.UpdateWorkforceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateWorkforceXAmzTargetEnum;
}
export declare class UpdateWorkforceResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateWorkforceResponse?: shared.UpdateWorkforceResponse;
}
