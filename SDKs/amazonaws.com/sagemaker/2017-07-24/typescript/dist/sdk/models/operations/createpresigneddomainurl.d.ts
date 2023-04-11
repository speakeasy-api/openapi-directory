import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreatePresignedDomainUrlXAmzTargetEnum {
    SageMakerCreatePresignedDomainUrl = "SageMaker.CreatePresignedDomainUrl"
}
export declare class CreatePresignedDomainUrlRequest extends SpeakeasyBase {
    createPresignedDomainUrlRequest: shared.CreatePresignedDomainUrlRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePresignedDomainUrlXAmzTargetEnum;
}
export declare class CreatePresignedDomainUrlResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createPresignedDomainUrlResponse?: shared.CreatePresignedDomainUrlResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
