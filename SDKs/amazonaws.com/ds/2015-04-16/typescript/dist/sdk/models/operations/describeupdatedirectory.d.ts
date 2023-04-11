import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeUpdateDirectoryXAmzTargetEnum {
    DirectoryService20150416DescribeUpdateDirectory = "DirectoryService_20150416.DescribeUpdateDirectory"
}
export declare class DescribeUpdateDirectoryRequest extends SpeakeasyBase {
    describeUpdateDirectoryRequest: shared.DescribeUpdateDirectoryRequest;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeUpdateDirectoryXAmzTargetEnum;
}
export declare class DescribeUpdateDirectoryResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    describeUpdateDirectoryResult?: shared.DescribeUpdateDirectoryResult;
    /**
     * DirectoryDoesNotExistException
     */
    directoryDoesNotExistException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
