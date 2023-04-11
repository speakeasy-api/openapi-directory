import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteWorkforceXAmzTargetEnum {
    SageMakerDeleteWorkforce = "SageMaker.DeleteWorkforce"
}
export declare class DeleteWorkforceRequest extends SpeakeasyBase {
    deleteWorkforceRequest: shared.DeleteWorkforceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteWorkforceXAmzTargetEnum;
}
export declare class DeleteWorkforceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteWorkforceResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
