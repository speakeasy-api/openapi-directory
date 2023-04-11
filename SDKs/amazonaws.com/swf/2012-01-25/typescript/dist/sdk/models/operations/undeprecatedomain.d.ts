import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UndeprecateDomainXAmzTargetEnum {
    SimpleWorkflowServiceUndeprecateDomain = "SimpleWorkflowService.UndeprecateDomain"
}
export declare class UndeprecateDomainRequest extends SpeakeasyBase {
    undeprecateDomainInput: shared.UndeprecateDomainInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UndeprecateDomainXAmzTargetEnum;
}
export declare class UndeprecateDomainResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DomainAlreadyExistsFault
     */
    domainAlreadyExistsFault?: any;
    /**
     * OperationNotPermittedFault
     */
    operationNotPermittedFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnknownResourceFault
     */
    unknownResourceFault?: any;
}
