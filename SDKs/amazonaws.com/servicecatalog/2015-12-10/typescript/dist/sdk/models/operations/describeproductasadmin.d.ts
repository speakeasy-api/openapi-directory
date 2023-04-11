import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeProductAsAdminXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribeProductAsAdmin = "AWS242ServiceCatalogService.DescribeProductAsAdmin"
}
export declare class DescribeProductAsAdminRequest extends SpeakeasyBase {
    describeProductAsAdminInput: shared.DescribeProductAsAdminInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeProductAsAdminXAmzTargetEnum;
}
export declare class DescribeProductAsAdminResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeProductAsAdminOutput?: shared.DescribeProductAsAdminOutput;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
