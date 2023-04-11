import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeRecipeXAmzTargetEnum {
    AmazonPersonalizeDescribeRecipe = "AmazonPersonalize.DescribeRecipe"
}
export declare class DescribeRecipeRequest extends SpeakeasyBase {
    describeRecipeRequest: shared.DescribeRecipeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRecipeXAmzTargetEnum;
}
export declare class DescribeRecipeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeRecipeResponse?: shared.DescribeRecipeResponse;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
