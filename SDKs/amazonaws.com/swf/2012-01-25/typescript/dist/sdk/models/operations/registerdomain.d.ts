import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RegisterDomainXAmzTargetEnum {
    SimpleWorkflowServiceRegisterDomain = "SimpleWorkflowService.RegisterDomain"
}
export declare class RegisterDomainRequest extends SpeakeasyBase {
    registerDomainInput: shared.RegisterDomainInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterDomainXAmzTargetEnum;
}
export declare class RegisterDomainResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DomainAlreadyExistsFault
     */
    domainAlreadyExistsFault?: any;
    /**
     * LimitExceededFault
     */
    limitExceededFault?: any;
    /**
     * OperationNotPermittedFault
     */
    operationNotPermittedFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyTagsFault
     */
    tooManyTagsFault?: any;
}
