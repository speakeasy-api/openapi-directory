import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteAliasXAmzTargetEnum {
    TrentServiceDeleteAlias = "TrentService.DeleteAlias"
}
export declare class DeleteAliasRequest extends SpeakeasyBase {
    deleteAliasRequest: shared.DeleteAliasRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAliasXAmzTargetEnum;
}
export declare class DeleteAliasResponse extends SpeakeasyBase {
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
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
