import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListCuratedEnvironmentImagesXAmzTargetEnum {
    CodeBuild20161006ListCuratedEnvironmentImages = "CodeBuild_20161006.ListCuratedEnvironmentImages"
}
export declare class ListCuratedEnvironmentImagesRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListCuratedEnvironmentImagesXAmzTargetEnum;
}
export declare class ListCuratedEnvironmentImagesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listCuratedEnvironmentImagesOutput?: shared.ListCuratedEnvironmentImagesOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
