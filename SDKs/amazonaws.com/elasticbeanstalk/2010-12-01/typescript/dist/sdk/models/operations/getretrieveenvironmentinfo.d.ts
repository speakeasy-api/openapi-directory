import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETRetrieveEnvironmentInfoActionEnum {
    RetrieveEnvironmentInfo = "RetrieveEnvironmentInfo"
}
/**
 * The type of information to retrieve.
 */
export declare enum GETRetrieveEnvironmentInfoInfoTypeEnum {
    Tail = "tail",
    Bundle = "bundle"
}
export declare enum GETRetrieveEnvironmentInfoVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETRetrieveEnvironmentInfoRequest extends SpeakeasyBase {
    action: GETRetrieveEnvironmentInfoActionEnum;
    /**
     * <p>The ID of the data's environment.</p> <p>If no such environment is found, returns an <code>InvalidParameterValue</code> error.</p> <p>Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error.</p>
     */
    environmentId?: string;
    /**
     * <p>The name of the data's environment.</p> <p> If no such environment is found, returns an <code>InvalidParameterValue</code> error. </p> <p> Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>
     */
    environmentName?: string;
    /**
     * The type of information to retrieve.
     */
    infoType: GETRetrieveEnvironmentInfoInfoTypeEnum;
    version: GETRetrieveEnvironmentInfoVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETRetrieveEnvironmentInfoResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
