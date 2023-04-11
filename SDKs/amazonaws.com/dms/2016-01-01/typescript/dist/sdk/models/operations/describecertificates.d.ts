import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeCertificatesXAmzTargetEnum {
    AmazonDMSv20160101DescribeCertificates = "AmazonDMSv20160101.DescribeCertificates"
}
export declare class DescribeCertificatesRequest extends SpeakeasyBase {
    describeCertificatesMessage: shared.DescribeCertificatesMessage;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxRecords?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCertificatesXAmzTargetEnum;
}
export declare class DescribeCertificatesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeCertificatesResponse?: shared.DescribeCertificatesResponse;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
