import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociateFileSystemAliasesXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301DisassociateFileSystemAliases = "AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases"
}
export declare class DisassociateFileSystemAliasesRequest extends SpeakeasyBase {
    disassociateFileSystemAliasesRequest: shared.DisassociateFileSystemAliasesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateFileSystemAliasesXAmzTargetEnum;
}
export declare class DisassociateFileSystemAliasesResponse extends SpeakeasyBase {
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * Success
     */
    disassociateFileSystemAliasesResponse?: shared.DisassociateFileSystemAliasesResponse;
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
