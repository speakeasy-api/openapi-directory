import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeprecateDomainXAmzTargetEnum {
    SimpleWorkflowServiceDeprecateDomain = "SimpleWorkflowService.DeprecateDomain"
}
export declare class DeprecateDomainRequest extends SpeakeasyBase {
    deprecateDomainInput: shared.DeprecateDomainInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeprecateDomainXAmzTargetEnum;
}
export declare class DeprecateDomainResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DomainDeprecatedFault
     */
    domainDeprecatedFault?: any;
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
