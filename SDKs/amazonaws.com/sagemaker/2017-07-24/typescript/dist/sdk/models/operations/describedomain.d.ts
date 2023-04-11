import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeDomainXAmzTargetEnum {
    SageMakerDescribeDomain = "SageMaker.DescribeDomain"
}
export declare class DescribeDomainRequest extends SpeakeasyBase {
    describeDomainRequest: shared.DescribeDomainRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDomainXAmzTargetEnum;
}
export declare class DescribeDomainResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeDomainResponse?: shared.DescribeDomainResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
