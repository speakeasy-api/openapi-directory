import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateAliasXAmzTargetEnum {
    TrentServiceUpdateAlias = "TrentService.UpdateAlias"
}
export declare class UpdateAliasRequest extends SpeakeasyBase {
    updateAliasRequest: shared.UpdateAliasRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateAliasXAmzTargetEnum;
}
export declare class UpdateAliasResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DependencyTimeoutException
     */
    dependencyTimeoutException?: any;
    /**
     * KMSInternalException
     */
    kmsInternalException?: any;
    /**
     * KMSInvalidStateException
     */
    kmsInvalidStateException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
