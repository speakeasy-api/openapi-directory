import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutComplianceItemsXAmzTargetEnum {
    AmazonSSMPutComplianceItems = "AmazonSSM.PutComplianceItems"
}
export declare class PutComplianceItemsRequest extends SpeakeasyBase {
    putComplianceItemsRequest: shared.PutComplianceItemsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutComplianceItemsXAmzTargetEnum;
}
export declare class PutComplianceItemsResponse extends SpeakeasyBase {
    /**
     * ComplianceTypeCountLimitExceededException
     */
    complianceTypeCountLimitExceededException?: any;
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidItemContentException
     */
    invalidItemContentException?: any;
    /**
     * InvalidResourceId
     */
    invalidResourceId?: any;
    /**
     * InvalidResourceType
     */
    invalidResourceType?: any;
    /**
     * ItemSizeLimitExceededException
     */
    itemSizeLimitExceededException?: any;
    /**
     * Success
     */
    putComplianceItemsResult?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TotalSizeLimitExceededException
     */
    totalSizeLimitExceededException?: any;
}
