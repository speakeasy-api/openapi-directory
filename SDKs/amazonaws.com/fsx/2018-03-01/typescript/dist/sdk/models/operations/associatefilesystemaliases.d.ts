import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateFileSystemAliasesXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301AssociateFileSystemAliases = "AWSSimbaAPIService_v20180301.AssociateFileSystemAliases"
}
export declare class AssociateFileSystemAliasesRequest extends SpeakeasyBase {
    associateFileSystemAliasesRequest: shared.AssociateFileSystemAliasesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateFileSystemAliasesXAmzTargetEnum;
}
export declare class AssociateFileSystemAliasesResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateFileSystemAliasesResponse?: shared.AssociateFileSystemAliasesResponse;
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * FileSystemNotFound
     */
    fileSystemNotFound?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
