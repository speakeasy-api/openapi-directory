import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETGenerateServiceLastAccessedDetailsActionEnum {
    GenerateServiceLastAccessedDetails = "GenerateServiceLastAccessedDetails"
}
/**
 * The level of detail that you want to generate. You can specify whether you want to generate information about the last attempt to access services or actions. If you specify service-level granularity, this operation generates only service data. If you specify action-level granularity, it generates service and action data. If you don't include this optional parameter, the operation generates service data.
 */
export declare enum GETGenerateServiceLastAccessedDetailsGranularityEnum {
    ServiceLevel = "SERVICE_LEVEL",
    ActionLevel = "ACTION_LEVEL"
}
export declare enum GETGenerateServiceLastAccessedDetailsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETGenerateServiceLastAccessedDetailsRequest extends SpeakeasyBase {
    action: GETGenerateServiceLastAccessedDetailsActionEnum;
    /**
     * The ARN of the IAM resource (user, group, role, or managed policy) used to generate information about when the resource was last used in an attempt to access an Amazon Web Services service.
     */
    arn: string;
    /**
     * The level of detail that you want to generate. You can specify whether you want to generate information about the last attempt to access services or actions. If you specify service-level granularity, this operation generates only service data. If you specify action-level granularity, it generates service and action data. If you don't include this optional parameter, the operation generates service data.
     */
    granularity?: GETGenerateServiceLastAccessedDetailsGranularityEnum;
    version: GETGenerateServiceLastAccessedDetailsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETGenerateServiceLastAccessedDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
