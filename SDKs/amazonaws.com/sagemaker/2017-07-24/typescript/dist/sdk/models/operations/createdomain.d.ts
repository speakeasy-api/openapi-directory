import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateDomainXAmzTargetEnum {
    SageMakerCreateDomain = "SageMaker.CreateDomain"
}
export declare class CreateDomainRequest extends SpeakeasyBase {
    createDomainRequest: shared.CreateDomainRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDomainXAmzTargetEnum;
}
export declare class CreateDomainResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createDomainResponse?: shared.CreateDomainResponse;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
