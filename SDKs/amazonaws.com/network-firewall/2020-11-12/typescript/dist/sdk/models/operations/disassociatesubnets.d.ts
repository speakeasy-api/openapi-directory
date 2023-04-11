import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociateSubnetsXAmzTargetEnum {
    NetworkFirewall20201112DisassociateSubnets = "NetworkFirewall_20201112.DisassociateSubnets"
}
export declare class DisassociateSubnetsRequest extends SpeakeasyBase {
    disassociateSubnetsRequest: shared.DisassociateSubnetsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateSubnetsXAmzTargetEnum;
}
export declare class DisassociateSubnetsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disassociateSubnetsResponse?: shared.DisassociateSubnetsResponse;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidOperationException
     */
    invalidOperationException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * InvalidTokenException
     */
    invalidTokenException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
