import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeDomainXAmzTargetEnum {
    SimpleWorkflowServiceDescribeDomain = "SimpleWorkflowService.DescribeDomain"
}
export declare class DescribeDomainRequest extends SpeakeasyBase {
    describeDomainInput: shared.DescribeDomainInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDomainXAmzTargetEnum;
}
export declare class DescribeDomainResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    domainDetail?: shared.DomainDetail;
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
