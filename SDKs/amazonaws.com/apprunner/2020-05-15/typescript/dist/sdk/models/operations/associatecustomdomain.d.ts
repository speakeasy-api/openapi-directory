import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateCustomDomainXAmzTargetEnum {
    AppRunnerAssociateCustomDomain = "AppRunner.AssociateCustomDomain"
}
export declare class AssociateCustomDomainRequest extends SpeakeasyBase {
    associateCustomDomainRequest: shared.AssociateCustomDomainRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateCustomDomainXAmzTargetEnum;
}
export declare class AssociateCustomDomainResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateCustomDomainResponse?: shared.AssociateCustomDomainResponse;
    contentType: string;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
