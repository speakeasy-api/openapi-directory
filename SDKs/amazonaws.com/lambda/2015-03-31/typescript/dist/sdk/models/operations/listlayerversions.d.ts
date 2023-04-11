import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architecture</a>.
 */
export declare enum ListLayerVersionsCompatibleArchitectureEnum {
    X8664 = "x86_64",
    Arm64 = "arm64"
}
/**
 * A runtime identifier. For example, <code>go1.x</code>.
 */
export declare enum ListLayerVersionsCompatibleRuntimeEnum {
    Nodejs = "nodejs",
    Nodejs43 = "nodejs4.3",
    Nodejs610 = "nodejs6.10",
    Nodejs810 = "nodejs8.10",
    Nodejs10X = "nodejs10.x",
    Nodejs12X = "nodejs12.x",
    Nodejs14X = "nodejs14.x",
    Nodejs16X = "nodejs16.x",
    Java8 = "java8",
    Java8Al2 = "java8.al2",
    Java11 = "java11",
    Python27 = "python2.7",
    Python36 = "python3.6",
    Python37 = "python3.7",
    Python38 = "python3.8",
    Python39 = "python3.9",
    Dotnetcore10 = "dotnetcore1.0",
    Dotnetcore20 = "dotnetcore2.0",
    Dotnetcore21 = "dotnetcore2.1",
    Dotnetcore31 = "dotnetcore3.1",
    Dotnet6 = "dotnet6",
    Nodejs43Edge = "nodejs4.3-edge",
    Go1X = "go1.x",
    Ruby25 = "ruby2.5",
    Ruby27 = "ruby2.7",
    Provided = "provided",
    ProvidedAl2 = "provided.al2",
    Nodejs18X = "nodejs18.x"
}
export declare class ListLayerVersionsRequest extends SpeakeasyBase {
    /**
     * The compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architecture</a>.
     */
    compatibleArchitecture?: ListLayerVersionsCompatibleArchitectureEnum;
    /**
     * A runtime identifier. For example, <code>go1.x</code>.
     */
    compatibleRuntime?: ListLayerVersionsCompatibleRuntimeEnum;
    /**
     * The name or Amazon Resource Name (ARN) of the layer.
     */
    layerName: string;
    /**
     * A pagination token returned by a previous call.
     */
    marker?: string;
    /**
     * The maximum number of versions to return.
     */
    maxItems?: number;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListLayerVersionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * Success
     */
    listLayerVersionsResponse?: shared.ListLayerVersionsResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
