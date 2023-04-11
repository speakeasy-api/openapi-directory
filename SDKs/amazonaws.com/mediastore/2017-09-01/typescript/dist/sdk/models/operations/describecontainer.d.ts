import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeContainerXAmzTargetEnum {
    MediaStore20170901DescribeContainer = "MediaStore_20170901.DescribeContainer"
}
export declare class DescribeContainerRequest extends SpeakeasyBase {
    describeContainerInput: shared.DescribeContainerInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeContainerXAmzTargetEnum;
}
export declare class DescribeContainerResponse extends SpeakeasyBase {
    /**
     * ContainerNotFoundException
     */
    containerNotFoundException?: any;
    contentType: string;
    /**
     * Success
     */
    describeContainerOutput?: shared.DescribeContainerOutput;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
