import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeNodeAssociationStatusXAmzTargetEnum {
    OpsWorksCMV20161101DescribeNodeAssociationStatus = "OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus"
}
export declare class DescribeNodeAssociationStatusRequest extends SpeakeasyBase {
    describeNodeAssociationStatusRequest: shared.DescribeNodeAssociationStatusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeNodeAssociationStatusXAmzTargetEnum;
}
export declare class DescribeNodeAssociationStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeNodeAssociationStatusResponse?: shared.DescribeNodeAssociationStatusResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
