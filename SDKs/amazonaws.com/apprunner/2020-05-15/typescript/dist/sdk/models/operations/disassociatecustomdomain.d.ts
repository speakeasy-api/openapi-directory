import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociateCustomDomainXAmzTargetEnum {
    AppRunnerDisassociateCustomDomain = "AppRunner.DisassociateCustomDomain"
}
export declare class DisassociateCustomDomainRequest extends SpeakeasyBase {
    disassociateCustomDomainRequest: shared.DisassociateCustomDomainRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateCustomDomainXAmzTargetEnum;
}
export declare class DisassociateCustomDomainResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disassociateCustomDomainResponse?: shared.DisassociateCustomDomainResponse;
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
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
