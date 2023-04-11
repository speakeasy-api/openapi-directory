import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateWorkforceXAmzTargetEnum {
    SageMakerCreateWorkforce = "SageMaker.CreateWorkforce"
}
export declare class CreateWorkforceRequest extends SpeakeasyBase {
    createWorkforceRequest: shared.CreateWorkforceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateWorkforceXAmzTargetEnum;
}
export declare class CreateWorkforceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createWorkforceResponse?: shared.CreateWorkforceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
