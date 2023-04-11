import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETActivateTypeActionEnum {
    ActivateType = "ActivateType"
}
/**
 * Contains logging configuration information for an extension.
 */
export declare class GETActivateTypeLoggingConfig extends SpeakeasyBase {
    logGroupName: string;
    logRoleArn: string;
}
/**
 * <p>The extension type.</p> <p>Conditional: You must specify <code>PublicTypeArn</code>, or <code>TypeName</code>, <code>Type</code>, and <code>PublisherId</code>.</p>
 */
export declare enum GETActivateTypeTypeEnum {
    Resource = "RESOURCE",
    Module = "MODULE",
    Hook = "HOOK"
}
export declare enum GETActivateTypeVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
/**
 * <p>Manually updates a previously-activated type to a new major or minor version, if available. You can also use this parameter to update the value of <code>AutoUpdate</code>.</p> <ul> <li> <p> <code>MAJOR</code>: CloudFormation updates the extension to the newest major version, if one is available.</p> </li> <li> <p> <code>MINOR</code>: CloudFormation updates the extension to the newest minor version, if one is available.</p> </li> </ul>
 */
export declare enum GETActivateTypeVersionBumpEnum {
    Major = "MAJOR",
    Minor = "MINOR"
}
export declare class GETActivateTypeRequest extends SpeakeasyBase {
    action: GETActivateTypeActionEnum;
    /**
     * <p>Whether to automatically update the extension in this account and region when a new <i>minor</i> version is published by the extension publisher. Major versions released by the publisher must be manually updated.</p> <p>The default is <code>true</code>.</p>
     */
    autoUpdate?: boolean;
    /**
     * The name of the IAM execution role to use to activate the extension.
     */
    executionRoleArn?: string;
    /**
     * Contains logging configuration information for an extension.
     */
    loggingConfig?: GETActivateTypeLoggingConfig;
    /**
     * <p>The major version of this extension you want to activate, if multiple major versions are available. The default is the latest major version. CloudFormation uses the latest available <i>minor</i> version of the major version selected.</p> <p>You can specify <code>MajorVersion</code> or <code>VersionBump</code>, but not both.</p>
     */
    majorVersion?: number;
    /**
     * <p>The Amazon Resource Name (ARN) of the public extension.</p> <p>Conditional: You must specify <code>PublicTypeArn</code>, or <code>TypeName</code>, <code>Type</code>, and <code>PublisherId</code>.</p>
     */
    publicTypeArn?: string;
    /**
     * <p>The ID of the extension publisher.</p> <p>Conditional: You must specify <code>PublicTypeArn</code>, or <code>TypeName</code>, <code>Type</code>, and <code>PublisherId</code>.</p>
     */
    publisherId?: string;
    /**
     * <p>The extension type.</p> <p>Conditional: You must specify <code>PublicTypeArn</code>, or <code>TypeName</code>, <code>Type</code>, and <code>PublisherId</code>.</p>
     */
    type?: GETActivateTypeTypeEnum;
    /**
     * <p>The name of the extension.</p> <p>Conditional: You must specify <code>PublicTypeArn</code>, or <code>TypeName</code>, <code>Type</code>, and <code>PublisherId</code>.</p>
     */
    typeName?: string;
    /**
     * <p>An alias to assign to the public extension, in this account and region. If you specify an alias for the extension, CloudFormation treats the alias as the extension type name within this account and region. You must use the alias to refer to the extension in your templates, API calls, and CloudFormation console.</p> <p>An extension alias must be unique within a given account and region. You can activate the same public resource multiple times in the same account and region, using different type name aliases.</p>
     */
    typeNameAlias?: string;
    version: GETActivateTypeVersionEnum;
    /**
     * <p>Manually updates a previously-activated type to a new major or minor version, if available. You can also use this parameter to update the value of <code>AutoUpdate</code>.</p> <ul> <li> <p> <code>MAJOR</code>: CloudFormation updates the extension to the newest major version, if one is available.</p> </li> <li> <p> <code>MINOR</code>: CloudFormation updates the extension to the newest minor version, if one is available.</p> </li> </ul>
     */
    versionBump?: GETActivateTypeVersionBumpEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETActivateTypeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
