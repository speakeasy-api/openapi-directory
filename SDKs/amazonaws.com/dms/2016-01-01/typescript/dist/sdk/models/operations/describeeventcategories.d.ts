import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeEventCategoriesXAmzTargetEnum {
    AmazonDMSv20160101DescribeEventCategories = "AmazonDMSv20160101.DescribeEventCategories"
}
export declare class DescribeEventCategoriesRequest extends SpeakeasyBase {
    describeEventCategoriesMessage: shared.DescribeEventCategoriesMessage;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEventCategoriesXAmzTargetEnum;
}
export declare class DescribeEventCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeEventCategoriesResponse?: shared.DescribeEventCategoriesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
