import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeTypeActionEnum {
    DescribeType = "DescribeType"
}
/**
 * <p>The kind of extension.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
 */
export declare enum GETDescribeTypeTypeEnum {
    Resource = "RESOURCE",
    Module = "MODULE",
    Hook = "HOOK"
}
export declare enum GETDescribeTypeVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class GETDescribeTypeRequest extends SpeakeasyBase {
    action: GETDescribeTypeActionEnum;
    /**
     * <p>The Amazon Resource Name (ARN) of the extension.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
     */
    arn?: string;
    /**
     * The version number of a public third-party extension.
     */
    publicVersionNumber?: string;
    /**
     * <p>The publisher ID of the extension publisher.</p> <p>Extensions provided by Amazon Web Services are not assigned a publisher ID.</p>
     */
    publisherId?: string;
    /**
     * <p>The kind of extension.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
     */
    type?: GETDescribeTypeTypeEnum;
    /**
     * <p>The name of the extension.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
     */
    typeName?: string;
    version: GETDescribeTypeVersionEnum;
    /**
     * <p>The ID of a specific version of the extension. The version ID is the value at the end of the Amazon Resource Name (ARN) assigned to the extension version when it is registered.</p> <p>If you specify a <code>VersionId</code>, <code>DescribeType</code> returns information about that specific extension version. Otherwise, it returns information about the default extension version.</p>
     */
    versionId?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeTypeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
